import jwt from "jsonwebtoken";
import {
  findUserByEmail,
  getUserByToken,
  register,
  updateRefreshToken,
} from "../services/authService.js";
import { MESSAGE } from "../utils/responseMessage.js";
import bcrypt from "bcryptjs";

const authController = {
  register: async (req, res) => {
    try {
      const salt = await bcrypt.genSaltSync(10);
      const hased = await bcrypt.hashSync(req.body.password, salt);
      req.body.password = hased;
      const newUser = await register(req.body);

      return res.status(200).json({ msg: MESSAGE.SUCCESS, data: newUser });
    } catch (error) {
      throw Error(error);
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await findUserByEmail(email);

      if (!user) {
        return res.status(404).json({ msg: MESSAGE.USER_NOT_FOUND });
      }

      const passwordMatched = await bcrypt.compare(password, user.password);

      if (!passwordMatched) {
        return res.status(403).json({ msg: MESSAGE.PASSWORD_INCORRECT });
      }

      const accessToken = await authController.generateAccessToken(user);
      const refreshToken = await authController.generateRefreshToken(user);

      await updateRefreshToken(user.id, refreshToken);

      delete user.password;

      return res.status(200).json({
        msg: MESSAGE.SUCCESS,
        data: { ...user, accessToken, refreshToken },
      });
    } catch (error) {
      throw new Error(error);
    }
  },

  refreshToken: async (req, res) => {
    try {
      const { token } = req.body;

      const isValidRefreshToken = await getUserByToken(token);

      if (!isValidRefreshToken) {
        return res.status(404).json({ msg: MESSAGE.TOKEN_NOT_VALID });
      }

      jwt.verify(
        token,
        process.env.REFRESH_TOKEN_SECRET,
        async (error, user) => {
          if (error) {
            console.log(error);
          }

          const newAccessToken = await authController.generateAccessToken(user);
          const newRefreshToken = await authController.generateRefreshToken(
            user
          );

          await updateRefreshToken(user.id, newRefreshToken);

          return res.status(200).json({
            msg: MESSAGE.SUCCESS,
            data: { newAccessToken, newRefreshToken },
          });
        }
      );
    } catch (error) {
      throw new Error(error);
    }
  },

  generateAccessToken: (user) => {
    return jwt.sign(
      {
        id: user?.id,
        name: user?.name,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
  },

  generateRefreshToken: (user) => {
    return jwt.sign(
      {
        id: user?.id,
        name: user?.name,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "15d",
      }
    );
  },
};

export default authController;
