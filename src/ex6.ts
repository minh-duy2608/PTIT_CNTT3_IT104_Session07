class AccountEx6 {
  public id: string;
  public userName: string;
  private password: string;
  public isLogin: boolean;
  public role: string;

  constructor(id: string, userName: string, password: string, role: string) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.isLogin = false;
    this.role = role;
  }

  login(): void {
  }

  logout(): void {
    if (this.isLogin) {
      console.log("Đăng xuất thành công");
      this.isLogin = false;
    }
  }
}

class UserAccEx6 extends AccountEx6 {
  public status: string;

  constructor(id: string, userName: string, password: string, role: string, status: string) {
    super(id, userName, password, role);
    this.status = status;
  }

  login(): void {
    if (this.status === "active") {
      this.isLogin = true;
      console.log(`Đăng nhập thành công cho tài khoản ${this.userName}`);
    } else if (this.status === "banned") {
      console.log("Tài khoản đã bị khóa");
    }
  }
}

class AdminAcc extends AccountEx6 {
  constructor(id: string, userName: string, password: string, role: string) {
    super(id, userName, password, role);
  }

  banUser(user: UserAccEx6): void {
    user.status = "banned";
    console.log(`Tài khoản ${user.userName} đã bị cấm`);
  }
}

const userEx6 = new UserAccEx6("U001", "nguyenvana", "123456", "user", "active");
const admin1 = new AdminAcc("A001", "admin1", "adminpass", "admin");

console.log(`Tài khoản ${userEx6.userName}, Trạng thái ban đầu: ${userEx6.status}`);
admin1.banUser(userEx6);
console.log(`Tài khoản ${userEx6.userName}, Trạng thái sau khi bị cấm: ${userEx6.status}`);   