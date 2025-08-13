"use strict";
class AccountEx6 {
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    login() {
    }
    logout() {
        if (this.isLogin) {
            console.log("Đăng xuất thành công");
            this.isLogin = false;
        }
    }
}
class UserAccEx6 extends AccountEx6 {
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            this.isLogin = true;
            console.log(`Đăng nhập thành công cho tài khoản ${this.userName}`);
        }
        else if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa");
        }
    }
}
class AdminAcc extends AccountEx6 {
    constructor(id, userName, password, role) {
        super(id, userName, password, role);
    }
    banUser(user) {
        user.status = "banned";
        console.log(`Tài khoản ${user.userName} đã bị cấm`);
    }
}
const userEx6 = new UserAccEx6("U001", "nguyenvana", "123456", "user", "active");
const admin1 = new AdminAcc("A001", "admin1", "adminpass", "admin");
console.log(`Tài khoản ${userEx6.userName}, Trạng thái ban đầu: ${userEx6.status}`);
admin1.banUser(userEx6);
console.log(`Tài khoản ${userEx6.userName}, Trạng thái sau khi bị cấm: ${userEx6.status}`);
