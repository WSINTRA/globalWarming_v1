// float roll  = atan2(2.0 * (q.q3 * q.q2 + q.q0 * q.q1) , 1.0 - 2.0 * (q.q1 * q.q1 + q.q2 * q.q2));
// float pitch = asin(2.0 * (q.q2 * q.q0 - q.q3 * q.q1));
// float yaw   = atan2(2.0 * (q.q3 * q.q0 + q.q1 * q.q2) , - 1.0 + 2.0 * (q.q0 * q.q0 + q.q1 * q.q1));

//functions for getting results for roll, yaw and pitch

[0.0021570289702780893, 0.9978425718467885, 0.04594909374252104, -0.04684260689256794]


const RollPitchYaw =(quarternion)=>{
let q0 = quarternion[0]
let q1 = quarternion[1]
let q2 = quarternion[2]
let q3 = quarternion[3]

let roll = Math.atan2(2.0 * ((q3 * q2) + (q0 * q1)) , 1.0 - 2.0 * ((q1 * q1) + (q2 * q2)) )
let pitch = Math.asin(2.0 * ( q2 * q0 - (q3 * q1)) )
let yaw = Math.atan2(2.0 * (q3 * q0 + q1 * q2) , - 1.0 + 2.0 * (q0 * q0 + (q1 * q1)))

return [roll, pitch, yaw]
}

export default RollPitchYaw;