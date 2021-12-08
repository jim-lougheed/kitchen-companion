

function calculateTime(timeInMinutes) {
    const timeInHours = Math.floor(timeInMinutes / 60)
    const leftoverMinutes = timeInMinutes - (timeInHours * 60)
    if (timeInHours < 1) {
        return `${timeInMinutes} minutes`
    } else {
        return `${timeInHours && `${timeInHours} hours`}${leftoverMinutes ? `, ${leftoverMinutes} minutes` : ''}`
    }
}

function removeLastSentence(summary) {
    let summaryWithoutLastSentence;
    let lastSeparator = Math.max(
        summary.lastIndexOf("."), 
        summary.lastIndexOf("!"), 
        summary.lastIndexOf("?")
    );

    let revSummary = summary.split('').reverse().join('');
    let sepSummary = revSummary.search(/[A-Z]\s+(")?[.!?]/); 
    let lastTag = summary.length-revSummary.search(/[/</]/) - 2;

    let lastPtr = (lastTag > lastSeparator) ? lastTag : summary.length;

    if (sepSummary > -1) {
        let text1 = revSummary.substring(sepSummary+1, revSummary.length).trim().split('').reverse().join('');
        let text2 = summary.substring(lastPtr, summary.length).replace(/['"]/g,'').trim();

        summaryWithoutLastSentence = text1 + text2;
    } else {
        summaryWithoutLastSentence = '';
    }
    return summaryWithoutLastSentence;
}


export {
    calculateTime,
    removeLastSentence
    }