/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  UserName: string;
  userPassword: string;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  userName: string;
  token: string;
  role: string;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  roles: string[];
  // 用户id
  // userId: string | number;
  // 用户名
  username: string;
  // 真实名字
  // realName: string;
  // 头像
  // avatar: string;
  // 介绍
  // desc?: string;
}
