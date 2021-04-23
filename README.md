# speech_to_text_api_v30

SpeechToTextApiV30 - JavaScript client for speech_to_text_api_v30
Speech to Text API v3.0.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: v3.0
- Package version: v3.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install speech_to_text_api_v30 --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your speech_to_text_api_v30 from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('speech_to_text_api_v30')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/speech_to_text_api_v30
then install it via:

```shell
    npm install YOUR_USERNAME/speech_to_text_api_v30 --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SpeechToTextApiV30 = require('speech_to_text_api_v30');

var defaultClient = SpeechToTextApiV30.ApiClient.instance;

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix['Ocp-Apim-Subscription-Key'] = "Token"

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix['subscription-key'] = "Token"

var api = new SpeechToTextApiV30.DefaultApi()

var id = "id_example"; // {String} Format - uuid. The identifier of the model that will be copied.

var opts = { 
  'modelCopy': new SpeechToTextApiV30.ModelCopy() // {ModelCopy} The body contains the subscription key of the target subscription.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.copyModelToSubscription(id, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://westus.api.cognitive.microsoft.com/speechtotext/v3.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SpeechToTextApiV30.DefaultApi* | [**copyModelToSubscription**](docs/DefaultApi.md#copyModelToSubscription) | **POST** /models/{id}/copyto | Copy Model
*SpeechToTextApiV30.DefaultApi* | [**createDataset**](docs/DefaultApi.md#createDataset) | **POST** /datasets | Create Dataset
*SpeechToTextApiV30.DefaultApi* | [**createEndpoint**](docs/DefaultApi.md#createEndpoint) | **POST** /endpoints | Create Endpoint
*SpeechToTextApiV30.DefaultApi* | [**createEvaluation**](docs/DefaultApi.md#createEvaluation) | **POST** /evaluations | Create Evaluation
*SpeechToTextApiV30.DefaultApi* | [**createHook**](docs/DefaultApi.md#createHook) | **POST** /webhooks | Create Web Hook
*SpeechToTextApiV30.DefaultApi* | [**createModel**](docs/DefaultApi.md#createModel) | **POST** /models | Create Model
*SpeechToTextApiV30.DefaultApi* | [**createProject**](docs/DefaultApi.md#createProject) | **POST** /projects | Create Project
*SpeechToTextApiV30.DefaultApi* | [**createTranscription**](docs/DefaultApi.md#createTranscription) | **POST** /transcriptions | Create Transcription
*SpeechToTextApiV30.DefaultApi* | [**deleteBaseModelLog**](docs/DefaultApi.md#deleteBaseModelLog) | **DELETE** /endpoints/base/{locale}/files/logs/{logId} | Delete Base Model Endpoint Log
*SpeechToTextApiV30.DefaultApi* | [**deleteBaseModelLogs**](docs/DefaultApi.md#deleteBaseModelLogs) | **DELETE** /endpoints/base/{locale}/files/logs | Delete All Base Model Endpoint Logs
*SpeechToTextApiV30.DefaultApi* | [**deleteDataset**](docs/DefaultApi.md#deleteDataset) | **DELETE** /datasets/{id} | Delete Dataset
*SpeechToTextApiV30.DefaultApi* | [**deleteEndpoint**](docs/DefaultApi.md#deleteEndpoint) | **DELETE** /endpoints/{id} | Delete Endpoint
*SpeechToTextApiV30.DefaultApi* | [**deleteEndpointLog**](docs/DefaultApi.md#deleteEndpointLog) | **DELETE** /endpoints/{id}/files/logs/{logId} | Delete Custom Model Endpoint Log
*SpeechToTextApiV30.DefaultApi* | [**deleteEndpointLogs**](docs/DefaultApi.md#deleteEndpointLogs) | **DELETE** /endpoints/{id}/files/logs | Delete All Custom Model Endpoint Logs
*SpeechToTextApiV30.DefaultApi* | [**deleteEvaluation**](docs/DefaultApi.md#deleteEvaluation) | **DELETE** /evaluations/{id} | Delete Evaluation
*SpeechToTextApiV30.DefaultApi* | [**deleteHook**](docs/DefaultApi.md#deleteHook) | **DELETE** /webhooks/{id} | Delete Web Hook
*SpeechToTextApiV30.DefaultApi* | [**deleteModel**](docs/DefaultApi.md#deleteModel) | **DELETE** /models/{id} | Delete Model
*SpeechToTextApiV30.DefaultApi* | [**deleteProject**](docs/DefaultApi.md#deleteProject) | **DELETE** /projects/{id} | Delete Project
*SpeechToTextApiV30.DefaultApi* | [**deleteTranscription**](docs/DefaultApi.md#deleteTranscription) | **DELETE** /transcriptions/{id} | Delete Transcription
*SpeechToTextApiV30.DefaultApi* | [**getBaseModel**](docs/DefaultApi.md#getBaseModel) | **GET** /models/base/{id} | Get Base Model
*SpeechToTextApiV30.DefaultApi* | [**getBaseModelLog**](docs/DefaultApi.md#getBaseModelLog) | **GET** /endpoints/base/{locale}/files/logs/{logId} | Get Base Model Endpoint Log
*SpeechToTextApiV30.DefaultApi* | [**getBaseModelLogs**](docs/DefaultApi.md#getBaseModelLogs) | **GET** /endpoints/base/{locale}/files/logs | Get Base Model Endpoint Logs
*SpeechToTextApiV30.DefaultApi* | [**getBaseModelManifest**](docs/DefaultApi.md#getBaseModelManifest) | **GET** /models/base/{id}/manifest | Get Base Model Manifest
*SpeechToTextApiV30.DefaultApi* | [**getBaseModels**](docs/DefaultApi.md#getBaseModels) | **GET** /models/base | Get Base Models
*SpeechToTextApiV30.DefaultApi* | [**getDataset**](docs/DefaultApi.md#getDataset) | **GET** /datasets/{id} | Get Dataset
*SpeechToTextApiV30.DefaultApi* | [**getDatasetFile**](docs/DefaultApi.md#getDatasetFile) | **GET** /datasets/{id}/files/{fileId} | Get Dataset File
*SpeechToTextApiV30.DefaultApi* | [**getDatasetFiles**](docs/DefaultApi.md#getDatasetFiles) | **GET** /datasets/{id}/files | Get Dataset Files
*SpeechToTextApiV30.DefaultApi* | [**getDatasets**](docs/DefaultApi.md#getDatasets) | **GET** /datasets | Get Datasets
*SpeechToTextApiV30.DefaultApi* | [**getDatasetsForProject**](docs/DefaultApi.md#getDatasetsForProject) | **GET** /projects/{id}/datasets | Get Datasets for Project
*SpeechToTextApiV30.DefaultApi* | [**getEndpoint**](docs/DefaultApi.md#getEndpoint) | **GET** /endpoints/{id} | Get Endpoint
*SpeechToTextApiV30.DefaultApi* | [**getEndpointLog**](docs/DefaultApi.md#getEndpointLog) | **GET** /endpoints/{id}/files/logs/{logId} | Get Custom Model Endpoint Log
*SpeechToTextApiV30.DefaultApi* | [**getEndpointLogs**](docs/DefaultApi.md#getEndpointLogs) | **GET** /endpoints/{id}/files/logs | Get Custom Model Endpoint Logs
*SpeechToTextApiV30.DefaultApi* | [**getEndpoints**](docs/DefaultApi.md#getEndpoints) | **GET** /endpoints | Get Endpoints
*SpeechToTextApiV30.DefaultApi* | [**getEndpointsForProject**](docs/DefaultApi.md#getEndpointsForProject) | **GET** /projects/{id}/endpoints | Get Endpoints for Project
*SpeechToTextApiV30.DefaultApi* | [**getEvaluation**](docs/DefaultApi.md#getEvaluation) | **GET** /evaluations/{id} | Get Evaluation
*SpeechToTextApiV30.DefaultApi* | [**getEvaluationFile**](docs/DefaultApi.md#getEvaluationFile) | **GET** /evaluations/{id}/files/{fileId} | Get Evaluation File
*SpeechToTextApiV30.DefaultApi* | [**getEvaluationFiles**](docs/DefaultApi.md#getEvaluationFiles) | **GET** /evaluations/{id}/files | Get Evaluation Files
*SpeechToTextApiV30.DefaultApi* | [**getEvaluations**](docs/DefaultApi.md#getEvaluations) | **GET** /evaluations | Get Evaluations
*SpeechToTextApiV30.DefaultApi* | [**getEvaluationsForProject**](docs/DefaultApi.md#getEvaluationsForProject) | **GET** /projects/{id}/evaluations | Get Evaluations for Project
*SpeechToTextApiV30.DefaultApi* | [**getHealthStatus**](docs/DefaultApi.md#getHealthStatus) | **GET** /healthstatus | Get Health Status
*SpeechToTextApiV30.DefaultApi* | [**getHook**](docs/DefaultApi.md#getHook) | **GET** /webhooks/{id} | Get Web Hook
*SpeechToTextApiV30.DefaultApi* | [**getHooks**](docs/DefaultApi.md#getHooks) | **GET** /webhooks | Get Web Hooks
*SpeechToTextApiV30.DefaultApi* | [**getModel**](docs/DefaultApi.md#getModel) | **GET** /models/{id} | Get Model
*SpeechToTextApiV30.DefaultApi* | [**getModelManifest**](docs/DefaultApi.md#getModelManifest) | **GET** /models/{id}/manifest | Get Custom Model Manifest
*SpeechToTextApiV30.DefaultApi* | [**getModels**](docs/DefaultApi.md#getModels) | **GET** /models | Get Custom Models
*SpeechToTextApiV30.DefaultApi* | [**getModelsForProject**](docs/DefaultApi.md#getModelsForProject) | **GET** /projects/{id}/models | Get Models for Project
*SpeechToTextApiV30.DefaultApi* | [**getProject**](docs/DefaultApi.md#getProject) | **GET** /projects/{id} | Get Project
*SpeechToTextApiV30.DefaultApi* | [**getProjects**](docs/DefaultApi.md#getProjects) | **GET** /projects | Get Projects
*SpeechToTextApiV30.DefaultApi* | [**getSupportedLocalesForDatasets**](docs/DefaultApi.md#getSupportedLocalesForDatasets) | **GET** /datasets/locales | Get Supported Locales for Datasets
*SpeechToTextApiV30.DefaultApi* | [**getSupportedLocalesForEndpoints**](docs/DefaultApi.md#getSupportedLocalesForEndpoints) | **GET** /endpoints/locales | Get Supported Locales for Endpoints
*SpeechToTextApiV30.DefaultApi* | [**getSupportedLocalesForEvaluations**](docs/DefaultApi.md#getSupportedLocalesForEvaluations) | **GET** /evaluations/locales | Get Supported Locales for Evaluations
*SpeechToTextApiV30.DefaultApi* | [**getSupportedLocalesForModels**](docs/DefaultApi.md#getSupportedLocalesForModels) | **GET** /models/locales | Get Supported Locales for Models
*SpeechToTextApiV30.DefaultApi* | [**getSupportedLocalesForTranscriptions**](docs/DefaultApi.md#getSupportedLocalesForTranscriptions) | **GET** /transcriptions/locales | Get Supported Locales for Transcriptions
*SpeechToTextApiV30.DefaultApi* | [**getSupportedProjectLocales**](docs/DefaultApi.md#getSupportedProjectLocales) | **GET** /projects/locales | Get Supported Locales for Projects
*SpeechToTextApiV30.DefaultApi* | [**getTranscription**](docs/DefaultApi.md#getTranscription) | **GET** /transcriptions/{id} | Get Transcription
*SpeechToTextApiV30.DefaultApi* | [**getTranscriptionFile**](docs/DefaultApi.md#getTranscriptionFile) | **GET** /transcriptions/{id}/files/{fileId} | Get Transcription File
*SpeechToTextApiV30.DefaultApi* | [**getTranscriptionFiles**](docs/DefaultApi.md#getTranscriptionFiles) | **GET** /transcriptions/{id}/files | Get Transcription Files
*SpeechToTextApiV30.DefaultApi* | [**getTranscriptions**](docs/DefaultApi.md#getTranscriptions) | **GET** /transcriptions | Get Transcriptions
*SpeechToTextApiV30.DefaultApi* | [**getTranscriptionsForProject**](docs/DefaultApi.md#getTranscriptionsForProject) | **GET** /projects/{id}/transcriptions | Get Transcriptions for Project
*SpeechToTextApiV30.DefaultApi* | [**pingHook**](docs/DefaultApi.md#pingHook) | **POST** /webhooks/{id}/ping | Ping Web Hook
*SpeechToTextApiV30.DefaultApi* | [**testHook**](docs/DefaultApi.md#testHook) | **POST** /webhooks/{id}/test | Test Web Hook
*SpeechToTextApiV30.DefaultApi* | [**updateDataset**](docs/DefaultApi.md#updateDataset) | **PATCH** /datasets/{id} | Update Dataset
*SpeechToTextApiV30.DefaultApi* | [**updateEndpoint**](docs/DefaultApi.md#updateEndpoint) | **PATCH** /endpoints/{id} | Update Endpoint
*SpeechToTextApiV30.DefaultApi* | [**updateEvaluation**](docs/DefaultApi.md#updateEvaluation) | **PATCH** /evaluations/{id} | Update Evaluation
*SpeechToTextApiV30.DefaultApi* | [**updateHook**](docs/DefaultApi.md#updateHook) | **PATCH** /webhooks/{id} | Update Web Hook
*SpeechToTextApiV30.DefaultApi* | [**updateModel**](docs/DefaultApi.md#updateModel) | **PATCH** /models/{id} | Update Model
*SpeechToTextApiV30.DefaultApi* | [**updateProject**](docs/DefaultApi.md#updateProject) | **PATCH** /projects/{id} | Update Project
*SpeechToTextApiV30.DefaultApi* | [**updateTranscription**](docs/DefaultApi.md#updateTranscription) | **PATCH** /transcriptions/{id} | Update Transcription
*SpeechToTextApiV30.DefaultApi* | [**uploadDatasetFromForm**](docs/DefaultApi.md#uploadDatasetFromForm) | **POST** /datasets/upload | Create Dataset from Form


## Documentation for Models

 - [SpeechToTextApiV30.ApiSpeechtotextV30DatasetsLocalesGet200ApplicationJsonResponse](docs/ApiSpeechtotextV30DatasetsLocalesGet200ApplicationJsonResponse.md)
 - [SpeechToTextApiV30.ApiSpeechtotextV30EndpointsLocalesGet200ApplicationJsonResponse](docs/ApiSpeechtotextV30EndpointsLocalesGet200ApplicationJsonResponse.md)
 - [SpeechToTextApiV30.ApiSpeechtotextV30EvaluationsLocalesGet200ApplicationJsonResponse](docs/ApiSpeechtotextV30EvaluationsLocalesGet200ApplicationJsonResponse.md)
 - [SpeechToTextApiV30.ApiSpeechtotextV30ModelsLocalesGet200ApplicationJsonResponse](docs/ApiSpeechtotextV30ModelsLocalesGet200ApplicationJsonResponse.md)
 - [SpeechToTextApiV30.ApiSpeechtotextV30ProjectsLocalesGet200ApplicationJsonResponse](docs/ApiSpeechtotextV30ProjectsLocalesGet200ApplicationJsonResponse.md)
 - [SpeechToTextApiV30.ApiSpeechtotextV30TranscriptionsLocalesGet200ApplicationJsonResponse](docs/ApiSpeechtotextV30TranscriptionsLocalesGet200ApplicationJsonResponse.md)
 - [SpeechToTextApiV30.Component](docs/Component.md)
 - [SpeechToTextApiV30.Dataset](docs/Dataset.md)
 - [SpeechToTextApiV30.DatasetProperties](docs/DatasetProperties.md)
 - [SpeechToTextApiV30.DatasetUpdate](docs/DatasetUpdate.md)
 - [SpeechToTextApiV30.Endpoint](docs/Endpoint.md)
 - [SpeechToTextApiV30.EndpointLinks](docs/EndpointLinks.md)
 - [SpeechToTextApiV30.EndpointProperties](docs/EndpointProperties.md)
 - [SpeechToTextApiV30.EndpointPropertiesUpdate](docs/EndpointPropertiesUpdate.md)
 - [SpeechToTextApiV30.EndpointUpdate](docs/EndpointUpdate.md)
 - [SpeechToTextApiV30.EntityError](docs/EntityError.md)
 - [SpeechToTextApiV30.EntityReference](docs/EntityReference.md)
 - [SpeechToTextApiV30.Error](docs/Error.md)
 - [SpeechToTextApiV30.ErrorContent](docs/ErrorContent.md)
 - [SpeechToTextApiV30.ErrorDetail](docs/ErrorDetail.md)
 - [SpeechToTextApiV30.Evaluation](docs/Evaluation.md)
 - [SpeechToTextApiV30.EvaluationProperties](docs/EvaluationProperties.md)
 - [SpeechToTextApiV30.EvaluationUpdate](docs/EvaluationUpdate.md)
 - [SpeechToTextApiV30.File](docs/File.md)
 - [SpeechToTextApiV30.FileLinks](docs/FileLinks.md)
 - [SpeechToTextApiV30.FileProperties](docs/FileProperties.md)
 - [SpeechToTextApiV30.HealthStatus](docs/HealthStatus.md)
 - [SpeechToTextApiV30.InnerError](docs/InnerError.md)
 - [SpeechToTextApiV30.InnerErrorV2](docs/InnerErrorV2.md)
 - [SpeechToTextApiV30.InternalModel](docs/InternalModel.md)
 - [SpeechToTextApiV30.Links](docs/Links.md)
 - [SpeechToTextApiV30.ManagementModel](docs/ManagementModel.md)
 - [SpeechToTextApiV30.ManagementModelArray](docs/ManagementModelArray.md)
 - [SpeechToTextApiV30.ManagementModelProperties](docs/ManagementModelProperties.md)
 - [SpeechToTextApiV30.Model](docs/Model.md)
 - [SpeechToTextApiV30.ModelCopy](docs/ModelCopy.md)
 - [SpeechToTextApiV30.ModelDeprecationDates](docs/ModelDeprecationDates.md)
 - [SpeechToTextApiV30.ModelFile](docs/ModelFile.md)
 - [SpeechToTextApiV30.ModelLinks](docs/ModelLinks.md)
 - [SpeechToTextApiV30.ModelManifest](docs/ModelManifest.md)
 - [SpeechToTextApiV30.ModelProperties](docs/ModelProperties.md)
 - [SpeechToTextApiV30.ModelUpdate](docs/ModelUpdate.md)
 - [SpeechToTextApiV30.PaginatedDatasets](docs/PaginatedDatasets.md)
 - [SpeechToTextApiV30.PaginatedEndpoints](docs/PaginatedEndpoints.md)
 - [SpeechToTextApiV30.PaginatedEvaluations](docs/PaginatedEvaluations.md)
 - [SpeechToTextApiV30.PaginatedFiles](docs/PaginatedFiles.md)
 - [SpeechToTextApiV30.PaginatedModels](docs/PaginatedModels.md)
 - [SpeechToTextApiV30.PaginatedProjects](docs/PaginatedProjects.md)
 - [SpeechToTextApiV30.PaginatedTranscriptions](docs/PaginatedTranscriptions.md)
 - [SpeechToTextApiV30.PaginatedWebHooks](docs/PaginatedWebHooks.md)
 - [SpeechToTextApiV30.Project](docs/Project.md)
 - [SpeechToTextApiV30.ProjectLinks](docs/ProjectLinks.md)
 - [SpeechToTextApiV30.ProjectProperties](docs/ProjectProperties.md)
 - [SpeechToTextApiV30.ProjectUpdate](docs/ProjectUpdate.md)
 - [SpeechToTextApiV30.Transcription](docs/Transcription.md)
 - [SpeechToTextApiV30.TranscriptionProperties](docs/TranscriptionProperties.md)
 - [SpeechToTextApiV30.TranscriptionUpdate](docs/TranscriptionUpdate.md)
 - [SpeechToTextApiV30.WebHook](docs/WebHook.md)
 - [SpeechToTextApiV30.WebHookLinks](docs/WebHookLinks.md)
 - [SpeechToTextApiV30.WebHookProperties](docs/WebHookProperties.md)
 - [SpeechToTextApiV30.WebHookPropertiesUpdate](docs/WebHookPropertiesUpdate.md)
 - [SpeechToTextApiV30.WebHookUpdate](docs/WebHookUpdate.md)


## Documentation for Authorization


### apiKeyHeader

- **Type**: API key
- **API key parameter name**: Ocp-Apim-Subscription-Key
- **Location**: HTTP header

### apiKeyQuery

- **Type**: API key
- **API key parameter name**: subscription-key
- **Location**: URL query string
