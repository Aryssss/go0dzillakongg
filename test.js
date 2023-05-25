const form = document.getElementById('quiz-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const answers = {
        q1: document.querySelector('input[name="q1"]:checked'),
        q2: document.querySelector('input[name="q2"]:checked'),
        q3: document.querySelector('input[name="q3"]:checked'),
        q4: document.querySelector('input[name="q4"]:checked')
    };

    let result = '';

    if (answers.q1 && answers.q2 && answers.q3 && answers.q4) {
        const countA = countOccurrences(['a', answers.q1.value, answers.q2.value, answers.q3.value, answers.q4.value]);
        const countB = countOccurrences(['b', answers.q1.value, answers.q2.value, answers.q3.value, answers.q4.value]);
        const countC = countOccurrences(['c', answers.q1.value, answers.q2.value, answers.q3.value, answers.q4.value]);

        if (countA >= countB && countA >= countC) {
            result = 'You are Godzilla!';
        } else if (countB >= countA && countB >= countC) {
            result = 'You are Kong!';
        } else {
            result = 'You are a mix of Godzilla and Kong!';
        }

        alert(result);

        form.reset();
    } else {
        alert('Please answer all the questions!');
    }
});

function countOccurrences(array) {
    const counts = {};

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        counts[item] = counts[item] ? counts[item] + 1 : 1;
    }

    return counts;
}