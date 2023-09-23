function findSpeed (speedInput){
    const speed = speedInput;
    //Checks if speed is a number
    if (!isNaN(speed)){
        
            const speedLimit = 70;
            const overSpeed = Math.abs(speed - speedLimit);
            const demeritPoints = Math.floor(overSpeed / 5);
            //Checks if speed below 70
            if (speed <= speedLimit){
                return 'OK';
            } else if (demeritPoints > 12){
                return 'Your license has been suspended';
            }
            else {
                return demeritPoints;
            }
        }

    }
//exports function findSpeed
module.exports = findSpeed;