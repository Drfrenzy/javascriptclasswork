const studentScores = [95, 78, 85, 60, 45, 92];

function Grade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else
        return 'F';
    
    
}

const letters = studentScores.map(Grade);

console.log(letters);