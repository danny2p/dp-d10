<?php

// Commerce Layer OAuth 2.0 Configuration
$client_id = 'M-uA65tCgOiY02b_gCb5n1gkrrP24IkaleiPfbHq7K0';
$client_secret = 'SDQU5fPDikdgMpFXzl15TzTOac1Z0oNlj5Eq-81ZxfU';
$grant_type = 'client_credentials';

// Commerce Layer API URL
$api_url = 'https://whizbang-widgets.commercelayer.io';

// Create a basic authentication header
$auth_header = base64_encode("$client_id:$client_secret");

// Prepare the request data
$data = [
    'grant_type' => $grant_type,
];

// Set up cURL to make the request
$ch = curl_init("$api_url/oauth/token");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Basic ' . $auth_header,
    'Content-Type: application/x-www-form-urlencoded',
]);

// Execute the request
$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);

// Check for errors
if ($http_code === 200) {
    $token_data = json_decode($response, true);
    $access_token = $token_data['access_token'];
    echo "Access Token: $access_token";
} else {
    echo "Error fetching token: HTTP $http_code - $response";
}

// Close cURL resource
curl_close($ch);
?>