import moment from 'moment';

export const calculateAnniversaryDate = (summaryDate, createdDate) => {
  const dt = new Date(createdDate)
  const sixMonthAnniversary = dt.setMonth(dt.getMonth() + 6)
  const oneYearAnniversary = dt.setFullYear(dt.getFullYear() + 1)
  const twoYearAnniversary = dt.setFullYear(dt.getFullYear() + 2)
  const threeYearAnniversary = dt.setFullYear(dt.getFullYear() + 3)
  const fourYearAnniversary = dt.setFullYear(dt.getFullYear() + 4)
  const fiveYearAnniversary = dt.setFullYear(dt.getFullYear() + 5)
  const sixYearAnniversary = dt.setFullYear(dt.getFullYear() + 6)
  const sevenYearAnniversary = dt.setFullYear(dt.getFullYear() + 7)
  const eightYearAnniversary = dt.setFullYear(dt.getFullYear() + 8)
  const nineYearAnniversary = dt.setFullYear(dt.getFullYear() + 9)
  const tenYearAnniversary = dt.setFullYear(dt.getFullYear() + 10)

  let anniversaryDates = {
    sixMonthAnniversary: new Date(sixMonthAnniversary).toISOString().split('T')[0],
    oneYearAnniversary: new Date(oneYearAnniversary).toISOString().split('T')[0],
    twoYearAnniversary: new Date(twoYearAnniversary).toISOString().split('T')[0],
    threeYearAnniversary: new Date(threeYearAnniversary).toISOString().split('T')[0],
    fourYearAnniversary: new Date(fourYearAnniversary).toISOString().split('T')[0],
    fiveYearAnniversary: new Date(fiveYearAnniversary).toISOString().split('T')[0],
    sixYearAnniversary: new Date(sixYearAnniversary).toISOString().split('T')[0],
    sevenYearAnniversary: new Date(sevenYearAnniversary).toISOString().split('T')[0],
    eightYearAnniversary: new Date(eightYearAnniversary).toISOString().split('T')[0],
    nineYearAnniversary: new Date(nineYearAnniversary).toISOString().split('T')[0],
    tenYearAnniversary: new Date(tenYearAnniversary).toISOString().split('T')[0],
  };

  return anniversaryDates;
}

export const calculateDurationBetweenDates = (summaryDate, createdDate) => {
  // let summaryDateMoment = moment(summaryDate)
  // let createdDateMoment = moment(createdDate);
  // const yearsSinceStarted = summaryDateMoment.diff(createdDateMoment, 'year')
  let summaryDateObject = new Date(summaryDate)
  let createdDateObject = new Date(createdDate)
  const yearsSinceStarted = new Date(summaryDateObject.getTime() - createdDateObject.getTime());
  // const yearsSinceStarted /= 12
  return yearsSinceStarted;
}

export const showTrophyIcon = (summaryDate, createdDate) => {
  // if (createdDate < summaryDate && calculateAnniversaryDate(summaryDate, createdDate) < summaryDate) {
  //   return true;
  // }
  const calculateAnniversaryDateResults = calculateAnniversaryDate(summaryDate, createdDate)

  if (createdDate < summaryDate) {
    switch (true) {
      case calculateAnniversaryDateResults.tenYearAnniversary < summaryDate:
        return true;
      case calculateAnniversaryDateResults.nineYearAnniversary < summaryDate:
        return true;
      case calculateAnniversaryDateResults.eightYearAnniversary < summaryDate:
        return true;
      case calculateAnniversaryDateResults.sevenYearAnniversary < summaryDate:
        return true;
      case calculateAnniversaryDateResults.sixYearAnniversary < summaryDate:
        return true;
      case calculateAnniversaryDateResults.fiveYearAnniversary < summaryDate:
        return true;
      case calculateAnniversaryDateResults.fourYearAnniversary < summaryDate:
        return true;
      case calculateAnniversaryDateResults.threeYearAnniversary < summaryDate:
        return true;
      case calculateAnniversaryDateResults.twoYearAnniversary < summaryDate:
        return true;
      case calculateAnniversaryDateResults.oneYearAnniversary < summaryDate:
        return true;
      case calculateAnniversaryDateResults.sixMonthAnniversary < summaryDate:
        return true;
      default:
        false
    }
  }
}