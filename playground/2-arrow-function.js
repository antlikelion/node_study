// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(3))

// const event = {
//     name: 'Birthday Party',
//     printGuestList: function () {
//         console.log(`Guest list for ${this.name}`)
//         // 이 때는 this가 event를 가리키는 모양임
//     }
// }

// const event = {
//     name: 'Birthday Party',
//     printGuestList: () => {
//         console.log(`Guest list for ${this.name}`)
//         // 이 때는 this가 event를 가리키지 않음.
//     }
// }

const event = {
    name: 'Birthday Party',
    guestList: ['나', "친구1", "친구2"],
    printGuestList() {
        const that = this
        console.log(`Guest list for ${this.name}`)
        // 이 때는 this가 event를 가리킴.
        this.guestList.forEach(function (guest) {
            console.log(`${guest}가 ${that.name}에 참석한다!`)
            // 여기서 this.name은 참조가 안 됨
        })
    }
}

// const event = {
//     name: 'Birthday Party',
//     guestList: ['나', "친구1", "친구2"],
//     printGuestList() {
//         console.log(`Guest list for ${this.name}`)
//         // 이 때는 this가 event를 가리킴.
//         this.guestList.forEach((guest) => {
//             console.log(`${guest}가 ${this.name}에 참석한다!`)
//         })
//     }
// }

event.printGuestList()
