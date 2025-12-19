<?php 
header(Content-type:application/json);
include "../dataBaseConnection.php";

//Get total users count
$totalUsersQuery =mysqli_query($dataBaseConnection, "SELECT Count(*) as total FROM users";
$totalUsers= mysqli_fetch_assoc($totalUsersQuery)['total'];

//GET total Hew users count
$activeHewsQuery=mysqli_query($dataBaseConnection,"SELECT COUNT(*) as total FROM users WHERE role ='HEW' AND status='active'");
$activeHEWs = mysqli_fetch_assoc($activeHEWsQuery)['total'];

$reportsToday=89; //Dummy data for now
$systemStatus=99.9%; //Dummy data for now

//Get activity recently active -lasy 5 users
$recentUsersQuery=mysqli_query($dataBaseConnection,"SELECT *from users order by id desc limit 5"); 
$recentUsers = [];//Empty array to store recent users

while($row=mysqli_fetch_assoc($recentUsersQuery)){
    $recentUsers[]=[
    
    
    'id'=>$row['id'],
    'firstname'=>$row['first_name'],
    'lastname'=>$row['last_name'],
    'role'=>$row['role'],
    'kebele'=>$row['kebele'],
    'status'=>$row['status'],
    'userId'=>$row['user_id'],
];

}


// Get user count by status
$activeUsersQuery = mysqli_query($dataBaseConnection, "SELECT COUNT(*) as total FROM users WHERE status='active'");
$activeUsers = mysqli_fetch_assoc($activeUsersQuery)['total'];

$pendingUsersQuery = mysqli_query($dataBaseConnection, "SELECT COUNT(*) as total FROM users WHERE status='pending'");
$pendingUsers = mysqli_fetch_assoc($pendingUsersQuery)['total'];

$inactiveUsersQuery = mysqli_query($dataBaseConnection, "SELECT COUNT(*) as total FROM users WHERE status='inactive'");
$inactiveUsers = mysqli_fetch_assoc($inactiveUsersQuery)['total'];

// Get user count by role
$roleCountsQuery = mysqli_query($dataBaseConnection, "SELECT role, COUNT(*) as count FROM users GROUP BY role");
$roleCounts = [];
while ($row = mysqli_fetch_assoc($roleCountsQuery)) {
    $roleCounts[$row['role']] = $row['count'];
}

// Responce
$response=[

'success'=>true,
'status'=>[
'totalUsers'=>(int)$totalUsers,
'activeHEWs'=>(int)$activeHEWs,
'reportsToday'=>$reportsToday,
'systemStatus'=>$systemStatus,
'activeUsers'=>(int)$recentUsers,
'pendingUsers'=>(int)$pendingUsers,
'inactiveUsers'=>(int)$inactiveUsers,
],
'recentUsers'=>$recentUsers,
'roleCounts'=>$roleCounts,
'timestamp'=>date('Y-m-d H:i:s'),
];

echo json_encode($response);
?>