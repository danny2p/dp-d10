<?php

namespace Drupal\commerce_layer\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Controller for the Products page.
 * 
 * This registers the /products class and renders a basic,
 * empty div that the react app will inject into. for this
 * example, i'm simply injecting multiple components into
 * this one page, though you'd likely distribute these components
 * into elements in the header, various blocks etc. 
 * 
 * This also grabs our auth token at the php layer, 
 * though it may be better to handle the entire auth
 * process in the react app if you don't need API 
 * connectivity via PHP/Drupal.
 * 
 *
 */
class ProductsController extends ControllerBase {

    // Define the properties we'll need to use across various functions
    private $token;
    private $api_url;

    public function __construct() {
      // Initialize the class property in the constructor.

      /**
       *
       * We need client_id, client_secret, grant type (and maybe 
       * market for some things) defined for auth token.  would store 
       * these as secrets in production.
       * 
       * https://docs.commercelayer.io/core/authentication/authorization-code
       */

      $client_id = "M-uA65tCgOiY02b_gCb5n1gkrrP24IkaleiPfbHq7K0";
      $client_secret = 'SDQU5fPDikdgMpFXzl15TzTOac1Z0oNlj5Eq-81ZxfU';
      $grant_type = 'client_credentials';
      $market = '14948';

      $this->api_url = "https://whizbang-widgets.commercelayer.io";
      // Create a basic authentication header
      $auth_header = base64_encode("$client_id:$client_secret");
      
      // Prepare the request data
      $data = [
          'grant_type' => $grant_type,
          'scope' => 'market:'.$market
      ];
      
      // Set up cURL to make the request
      $ch = curl_init($this->api_url."/oauth/token");
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
          $this->token = $token_data['access_token'];
      } else {
        $this->token = FALSE;
      }
      
      // Close cURL resource
      curl_close($ch);

    }

  /**
   * Returns the Products page content.
   *
   * @return array
   *   A render array containing the page content.
   */
  public function content() {

    // Build the render array for the component. attach our react app library
    $build = [
      '#markup' => '<div id="cl-product-price">Markup Area</div>',
      '#attached' => [
        'library' => [
          'commerce_layer/react-app'
        ],
        'drupalSettings' => [ //pass these to the react app
          'commerceLayerAuthToken' => $this->token,
          'commerceLayerApiUrl' => $this->api_url
        ]
      ]
    ];

    return $build;
  }
}



