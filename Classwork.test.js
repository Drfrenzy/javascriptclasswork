const {greaterthan, upgardedgrade, squareNumbers, afternoonClass, sumExpenses, Grade} = require("../ClassTask")


test("test for greaterthan", ()=>{
    const testScores = [57, 67, 76, 87, 45, 90, 65, 69, 82, 71];
    const expected = [76, 87, 90, 82, 71];
    const received = greaterthan(testScores);
    expect(received).toStrictEqual(expected);
});

test("upgraded exam grade", () => {
    
    const examGrades = [85, 92, 78, 88, 95];
    const expected = [90, 97, 83, 93, 100];
    const result = upgardedgrade(examGrades);
    expect(result).toEqual(expected);
});

test("squared numbers", () => {
    const list = [2, 4, 6, 8, 10];
    const expected = [4, 16, 36, 64, 100];
    const result = squareNumbers(list);
    expect(result).toEqual(expected);
});

test("afternoon class schedule", () => {
    const classTime = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];
    const expected = ["1:00 PM", "3:00 PM", "5:00 PM"];
    const result = afternoonClass(classTime)
    expect(result).toEqual(expected);
});

test("expenses summation test", () => {
    const expenses = [150, 100, 50, 80];
    const expected = 380;
    const result = sumExpenses(expenses)
    expect(result).toEqual(expected);
});

test("grade declaration", () => {
    const studentScores = [95, 78, 85, 60, 45, 92];
    const expected = [ 'A', 'C', 'B', 'D', 'F', 'A' ]
    const received = Grade(studentScores)
    expect(received).toEqual(expected);
});