# Student Mark Entry Portal Specification

### API Docs _(Current API version: v1)_
###### `POST` **/api/v1/auth**
- **Headers**: ```Content-type: application/JSON```
- **Authentication**: ```none```
- **Param**: ```{"userid": "<School ID>", "password", "<User password>"}```
- **Response (FAIL)**: ```{"error": 1, "reason": "Invalid userid or password."}```
- **Response (FAIL)**: ```{"error": 1, "reason": "Not found."}```
- **Response (SUCCESS)**: ```{"error": 0, "token": "<token here>", "type": "student/teacher/admin"}```

Obtain user authentication information (token) to be used for future requests to API server

###### `GET` **/api/v1/analysis/list**
- **Headers**: ```Content-type: application/JSON```
- **Authentication**: ```Token <token>``` or ```<token>```
- **Param**: ```none```
- **Response (FAIL)**: ```{"error": 1, "reason": "Unauthenticated."}```
- **Response (SUCCESS)**: ```{"error": 0, "count": <Total Analysis Count>, "list": [<Array of AnalysisInfo objects>]}```

Returns the list of AnalysisInfo object for the main page to only show the info and the important information

###### `GET` **/api/v1/analysis/:analysis_id**
- **Headers**: ```Content-type: application/JSON```
- **Authentication**: ```Token <token>``` or ```<token>```
- **Param**: ```none```
- **Response (FAIL)**: ```{"error": 1, "reason": "Unauthenticated."}```
- **Response (SUCCESS)**: ```{"error": 0, "analysis": <Analysis Object>}```

Return an Analysis object with details including questions and other stuff

###### `POST` **/api/v1/analysis/create**
- **Headers**: ```Content-type: application/JSON```
- **Authentication**: ```Token <token>``` or ```<token>```
- **Param**: ```<Analysis Object without ID>```
- **Response (FAIL)**: ```{"error": 1, "reason": "Unauthenticated."}```
- **Response (FAIL)**: ```{"error": 1, "reason": "Invalid Parameters."}```
- **Response (SUCCESS)**: ```{"error": 0, "id": "<analysis ID>"}```

Creates a new Analysis and returns the id of the new analysis. Need not to supplement the "id" field as it will automatically be generated and overwritten.

###### `POST` **/api/v1/analysis/:analysis_id**
- **Headers**: ```Content-type: application/JSON```
- **Authentication**: ```Token <token>``` or ```<token>```
- **Param**: ```<Updated Analysis object>```
- **Response (FAIL)**: ```{"error": 1, "reason": "Unauthenticated."}```
- **Response (FAIL)**: ```{"error": 1, "reason": "Invalid Parameters."}```
- **Response (FAIL)**: ```{"error": 1, "reason": "Not found."}```
- **Response (SUCCESS)**: ```{"error": 0, "ok": true}```

Updates the entire analysis object, questions are optional and if questions are not specified, current values will be used. Returns ok if successfully updated.

###### `POST` **/api/v1/analysis/:analysis_id/:question**
- **Headers**: ```Content-type: application/JSON```
- **Authentication**: ```Token <token>``` or ```<token>```
- **Param**: ```<Updated Question object>```
- **Response (FAIL)**: ```{"error": 1, "reason": "Unauthenticated."}```
- **Response (FAIL)**: ```{"error": 1, "reason": "Invalid Parameters."}```
- **Response (FAIL)**: ```{"error": 1, "reason": "Not found."}```
- **Response (SUCCESS)**: ```{"error": 0, "ok": true}```

Updates a single question with a Question object. Returns ok if successfully updated.

###### `POST` **/api/v1/analysis/:analysis_id/codes**
- **Headers**: ```Content-type: application/JSON```
- **Authentication**: ```Token <token>``` or ```<token>```
- **Param**: ```<Code object without id>```
- **Response (FAIL)**: ```{"error": 1, "reason": "Unauthenticated."}```
- **Response (FAIL)**: ```{"error": 1, "reason": "Invalid Parameters."}```
- **Response (SUCCESS)**: ```{"error": 0, "code": <Code object>}```

Creates a new code for that analysis with the options specified in the param. The "id" field will be overwritten by the new generated code and returns the complete Code object

###### `GET` **/api/v1/analysis/:analysis_id/codes**
- **Headers**: ```Content-type: application/JSON```
- **Authentication**: ```Token <token>``` or ```<token>```
- **Param**: ```none```
- **Response (FAIL)**: ```{"error": 1, "reason": "Unauthenticated."}```
- **Response (SUCCESS)**: ```{"error": 0, "generated": [<Array of Code object>]}```

Fetch all the available codes for that particular analysis, and returns an array of Code objects.

###### `GET` **/api/v1/entry/:code**
- **Headers**: ```Content-type: application/JSON```
- **Authentication**: ```Token <token>``` or ```<token>```
- **Param**: ```none```
- **Response (FAIL)**: ```{"error": 1, "reason": "Unauthenticated."}```
- **Response (FAIL)**: ```{"error": 1, "reason": "Not found."}```
- **Response (SUCCESS)**: ```{"error": 0, "analysis": <Analysis Object>}```

Student endpoint for getting the Analysis using the code, returns the Analysis object on success.

###### `POST` **/api/v1/entry/:code**
- **Headers**: ```Content-type: application/JSON```
- **Authentication**: ```Token <token>``` or ```<token>```
- **Param**: ```<Updated Analysis object>```
- **Response (FAIL)**: ```{"error": 1, "reason": "Unauthenticated."}```
- **Response (FAIL)**: ```{"error": 1, "reason": "Not found."}```
- **Response (SUCCESS)**: ```{"error": 0, "ok": true}```

Student endpoint for updating the progress of the analysis completetion by sending the updated Analysis object, and questions field can be omitted and if omitted it will use the last updated values.

###### `POST` **/api/v1/entry/:code/:question**
- **Headers**: ```Content-type: application/JSON```
- **Authentication**: ```Token <token>``` or ```<token>```
- **Param**: ```<Updated Analysis object>```
- **Response (FAIL)**: ```{"error": 1, "reason": "Unauthenticated."}```
- **Response (FAIL)**: ```{"error": 1, "reason": "Invalid Parameters."}```
- **Response (FAIL)**: ```{"error": 1, "reason": "Not found."}```
- **Response (SUCCESS)**: ```{"error": 0, "ok": true}```

Student endpoint for updating the progess and marks of a single question, provides updated stats for the teacher to leverage.

###### `POST` **/api/v1/entry/:code/done**
- **Headers**: ```Content-type: application/JSON```
- **Authentication**: ```Token <token>``` or ```<token>```
- **Param**: ```<Complete Analysis object>```
- **Response (FAIL)**: ```{"error": 1, "reason": "Unauthenticated."}```
- **Response (FAIL)**: ```{"error": 1, "reason": "Invalid Parameters."}```
- **Response (FAIL)**: ```{"error": 1, "reason": "Not found."}```
- **Response (SUCCESS)**: ```{"error": 0, "ok": true}```

Informs the server that the student has completed the analysis, and the client submits the complete Analysis object (optional, if not provided it will use the last submitted values).

###### `GET` **/api/v1/analysis/:id/codes/:code**
- **Headers**: ```Content-type: application/JSON```
- **Authentication**: ```Token <token>``` or ```<token>```
- **Param**: ```none```
- **Response (FAIL)**: ```{"error": 1, "reason": "Unauthenticated."}```
- **Response (FAIL)**: ```{"error": 1, "reason": "Not found."}```
- **Response (SUCCESS)**: ```{"error": 0, "results": [<Array of Results objects>]}```

### WS Docs
To be implemented in v2 API

### Objects and Structures
##### AnalysisInfo
- **id**: Analysis ID
- **name**: Analysis name
- **info**: Description of analysis
- **qncnt**: Number of questions (not including subquestions)

##### Analysis
- **id**: Analysis ID
- **name**: Analysis name
- **info**: Description of analysis
- **qncnt**: Total number of questions (not including subquestions)
- **questions**: [<Array of Question object>] or blank array for no questions yet

##### Question
- **number**: Question number in analysis
- **?type**: (Optional) Type of question (1 = MCQ, 2 = Short answer, 3 = Essay, 4 = Others)
- **totalMarks**: Total marks for that question (including subquestions)
- **marks**: Maximum marks for this question
- **required**: Is this question required (true/false)
- **analysisID**: the ID of the analysis that this question is in
- **section**: Section of the question that it is part of (either string or int, unchecked)
- **?subQuestions**: (Optional) Array of objects with `marks`, `type`, `part` keys *(part: can be "i", "ii", "a", "b", etc)*

##### Code
- **analysis_id**: The analysis ID that this code belongs to
- **id**: The actual 6-character alphanumerical code
- **?description**: (Optional) Description of the code
- **expires**: The timestamp in seconds where the code will expire, 0 for no expiry time
- **status**: (Will be used later) 

##### Results
- **analysis_id**: The analysis ID that this code belongs to
- **student_id**: ID of the student who completed the analysis
- **code_id**: Code used to access the analysis
- **timestamp**: Timestamp of analysis completetion
- **questions**: Array of Questions object of the completed analysis
