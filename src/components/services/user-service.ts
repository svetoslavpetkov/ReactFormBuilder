import PromiseUtil from "./PromiseUtil";

interface ISimpleUserData {
  email: string;
  fullName: string;
  address: string; 
}

class UserService {
  async getSimpleData(): Promise<ISimpleUserData> {
    return PromiseUtil.returnDelayed({
      email: "john.doe@test.com",
      address: "",
      fullName: "John Doe",
    });
  }

  async saveSimpleData(user: ISimpleUserData): Promise<void> {
    await PromiseUtil.wait();
  }
}

const instance = new UserService();

export default instance;