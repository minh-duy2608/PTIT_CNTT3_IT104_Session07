class Account {
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

class UserAcc extends Account {
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

const user1 = new UserAcc("U001", "nguyenvana", "123456", "user", "active");
const user2 = new UserAcc("U002", "tranthib", "abcdef", "user", "banned");

console.log(`Tài khoản ${user1.userName}, Trạng thái ban đầu: ${user1.isLogin}`);
user1.login();
console.log(`Sau đăng nhập: ${user1.isLogin}`);
user1.logout();
console.log(`Sau đăng xuất: ${user1.isLogin}`);

console.log(`\nTài khoản ${user2.userName}, Trạng thái ban đầu: ${user2.isLogin}`);
user2.login();
console.log(`Sau đăng nhập: ${user2.isLogin}`);
user2.logout(); 
console.log(`Sau đăng xuất: ${user2.isLogin}`);