function cpuEmulator(subroutine) {
    
}

console.log(cpuEmulator(
    subroutine = [
        "MOV 5,R00",
        "MOV 10,R01",
        "JZ 7",
        "ADD R02,R01",
        "DEC R00",
        "JMP 3",
        "MOV R02,R42"
    ]
));