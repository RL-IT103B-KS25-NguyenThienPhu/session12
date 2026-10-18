let devices = [
    { id: "DEV_001", name: "quat",room:"Phong khach",power: 100, isOn:false },
    { id: "DEV_002", name: "may lanh",room:"Phong ngu", power: 500, isOn: true }
];

let nextId = 3;
function findIndexById(id) {
    for (let i = 0; i < devices.length; i++) {
        if (devices[i].id === id) {
            return i;
        }
    }
    return -1;
}

// hien thi
function handleShowList() {
    console.log("----- DANH SACH THIET BI ------");
    if (devices.length === 0) {
        console.log("Kho rong!");
        return;
    }
    for (let i = 0; i < devices.length; i++) {
        let d = devices[i];
        let statusText = d.isOn ? "BAT" : "TAT";
        console.log(d.id + " |"+ d.name +" | "+ d.room +" | " + d.power + "W | "+ statusText);
    }
}

//them
function handleAddDevice(name, room, power) {
    if (!name || !room || power <= 0) {
        console.log("Them that bai: Thong tin nhap vao khong hop le!");
        return;
    }

    let idString = "DEV_00" + nextId;
    if (nextId >= 10) {
        idString = "DEV_0" + nextId;
    }

    let newDevice = {
        id: idString,
        name: name,
        room: room,
        power: power,
        isOn: false
    };

    devices.push(newDevice);
    nextId++;
    console.log("Da them thiet bi thanh cong: " +name);
}

//bat tat thiet bi
function handleTogglePower(id) {
    let idx = findIndexById(id);
    if (idx === -1) {
        console.log("Khong tim thay ma thiet bi: " +id);
        return;
    }
    devices[idx].isOn = !devices[idx].isOn;
    let statusText = devices[idx].isOn ?"BAT":"TAT";
    console.log("Thiet bi " + id + " hien tai da chuyen sang: " +statusText);
}

//Xóa thiet bị 
function handleDeleteDevice(id) {
    let idx = findIndexById(id);
    if (idx === -1) {
        console.log("Khong tim thay ma can xoa: " + id);
        return;
    }
    let removed = devices.splice(idx, 1);
    console.log("Da xoa: " + removed[0].name);
}


function menu(choice, param1, param2, param3) {
    switch (choice) {
        case 1:
            handleShowList();
            break;

        case 2:
            handleAddDevice(param1, param2, param3);
            break;

        case 3:
            handleTogglePower(param1);
            break;

        case 4:
            handleDeleteDevice(param1);
            break;

        case 0:
            console.log("Thoat chuong trinh");
            break;

        default:
            console.log("Khong hop le");
            break;
    }
}


menu(1);
menu(2,"Binh nong lanh", "Phong tam", 2500);
menu(3, "DEV_001");
menu(1);