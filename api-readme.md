# API Documentation #
## Get ##
* **URL**
  /api/videos
* **Method:**
  `GET`

*  **URL Params**

   **Required:**

   `auth=[integer]`

   **Optional:**

   `team=[integer]`

   `gameDay=[integer]`

   `seasonId=[integer]`


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    ```javascript
    {
      count: [integer],
      data: [
        {vid:[integer], video-meta...},
        {vid:[integer], video-meta...},
        {vid:[integer], video-meta...},
      ]
    }
    ```

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Video not found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/api/videos",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

## Update/Create ##
* **URL**
  /api/video
* **Method:**
  `Post`

*  **URL Params**

   **Required:**

   `auth=[integer]`<br>
    For update `vid=[integer]`
    For create `vid=null`



* **Data Params**

  `video-meta...`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    ```javascript
    {
      video-meta...
    }
    ```

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Video not found" }`
    Only when vid is set

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

  * **Code:** 500 UNAUTHORIZED <br />
    **Content:** `{ error : "Internal Error" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/api/video",
      dataType: "json",
      data: {video-meta...}
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
  ```
