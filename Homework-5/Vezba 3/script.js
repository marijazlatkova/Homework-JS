// Speed Limits

function speedLimits(speed) {
  let speedLimit = 50;
  let penaltyInterval = 5;
  let penaltyPoints = Math.floor((speed - speedLimit) / penaltyInterval);

  if (speed <= speedLimit) {
    console.log('Safe driving. Continue.');
  } else if (speed > 120 || penaltyPoints > 10) {
    console.log('License Suspended.');
  } else {
    console.log(`Speed Limit Crossed. Penalty points: ${penaltyPoints}.`);
  }
};

speedLimits(80);