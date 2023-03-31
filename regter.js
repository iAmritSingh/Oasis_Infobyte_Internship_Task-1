function validateForm() {
    let x = document.forms["myForm"]["username"].value;
    let fn = document.forms["myForm"]["fname"].value;
    let ln = document.forms["myForm"]["lname"].value;
    let ps = document.forms["myForm"]["password"].value;
    if (fn == "") {
        alert("first name must be filled out");
        return false;
    }
    if (ln == "") {
        alert("last name must be filled out");
        return false;
    }
    if (x == "") {
        alert("Username must be filled out");
        return false;
    }
    else {
        if (x.length < 5) {
            alert("Username must be of mininumum length 5");
            return false;
        }
    }
    if (ps == "") {
        alert("Password must be filled out");
        return false;
    }
    else {
        if (ps.length < 10) {
            alert("Password must be of minimum length 10");
            return false;
        }
        else {
            let U = 0;
            let S = 0;
            let D = 0;
            let L = 0;
            for (let i = 0; i < ps.length; i++) {
                if (ps[i] >= 'A' && ps[i] <= 'Z') {
                    U++;
                }
                else if (ps[i] >= '0' && ps[i] <= '9') {
                    D++;
                }
                else if (ps[i] >= 'a' && ps[i] <= 'z') {
                    L++;
                }
                else {
                    S++;
                }
            }
            if (U < 1 || S < 1 || D < 1) {
                alert("Password must contain one upperCase,digit and special character");
                return false;
            }
        }
    }
    return true;

}