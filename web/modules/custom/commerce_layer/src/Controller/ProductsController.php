<?php

namespace Drupal\commerce_layer\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Controller for the Products page.
 */
class ProductsController extends ControllerBase {

    // Define the properties we'll need to use across various functions
    private $token;
    private $api_url;

    public function __construct() {
      // Initialize the class property in the constructor.

      // We only need client_id and clinet_secret for auth token
      $client_id = "M-uA65tCgOiY02b_gCb5n1gkrrP24IkaleiPfbHq7K0";
      $client_secret = 'SDQU5fPDikdgMpFXzl15TzTOac1Z0oNlj5Eq-81ZxfU';
      $grant_type = 'client_credentials';

      $this->api_url = "https://whizbang-widgets.commercelayer.io";
      // Create a basic authentication header
      $auth_header = base64_encode("$client_id:$client_secret");
      
      // Prepare the request data
      $data = [
          'grant_type' => $grant_type,
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
   * Helper function to get a product price
   *
   * @return string
   * return a price string
   */

  private function fetch_product_price() {
    $request_url = $this->api_url."/products/dd-1111";
    try {
      $response = \Drupal::httpClient()->get(
        $request_url, array(
          'headers' => array(
            'Accept' => 'text/plain', 
            'Authorization' => $this->token
          )
        )
      );
      $data = (string) $response->getBody();
      if (empty($data)) {
        return FALSE;
      } else {
        return $data;
      }
    }
    catch (RequestException $e) {
      return FALSE;
    }
  }
  

  /**
   * Returns the Products page content.
   *
   * @return array
   *   A render array containing the page content.
   */
  public function content() {

    /*
    return [
      '#markup' => $this->t('Commerce Layer Pricing Component'),
    ];
    */
    // Fetch the product price from Commerce Layer
    
    #$productPrice = $this->fetch_product_price(); // Implement the fetchProductPrice function as described earlier.

    // Create a Commerce Price object from the fetched price
    
    #$price = new Price($productPrice, 'USD'); // Adjust currency as needed

    // Attach the necessary React component JavaScript and CSS files.
    // Replace 'your-module/your-react-component' with the actual library name.
    #$attachments['#attached']['library'][] = 'commerce_layer/commerceLayerProductPrice';

    // Build the render array for the component.
    $build = [
      '#markup' => '<div id="cl-product-price">Markup Area</div>',
      '#attached' => [
        'library' => [
          'commerce_layer/react-app'
        ],
        'drupalSettings' => [
          'commerceLayerAuthToken' => $this->token,
          'commerceLayerApiUrl' => $this->api_url
        ]
      ]
    ];
   
    // Add the auth token as a JavaScript setting for our react app.
    #$build['#attached']['drupalSettings']['commerceLayerAuthToken'] = $this->token;
    
    // Add the product price data as a JavaScript setting.
    /*
    $build['#attached']['drupalSettings']['commerceLayerProductPrice'] = [
      'amount' => $price->getNumber(),
      'currency' => $price->getCurrencyCode(),
    ];
    */
    return $build;
  }
}



