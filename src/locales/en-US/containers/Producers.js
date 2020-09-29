/*
 * Producers Messages
 *
 * This contains all the text for the Producers container.
 */

// import { defineMessages } from 'react-intl';

// export default defineMessages({
export default {
  'app.containers.Producers.second': 'second',
  'app.containers.Producers.header': 'Producers',
  'app.containers.Producers.emptyProducers':
    'You don\'t have any <a href="https://docs.bitsky.ai/overview#producer" target="_blank">Producer Configurations</a>',
  'app.containers.Producers.drawerTitleCreate': 'Create a Producer Configuration',
  'app.containers.Producers.drawerTitleUpdate': 'Modify this Producer Configuration',
  'app.containers.Producers.activeProducerTip':
    'Producer Configuration is in Active state, you need to Deactivate it before you can modify',
  'app.containers.Producers.registerProducerDescription':
    '<a href="https://docs.bitsky.ai/overview#producer">Producer</a> is used to execute <a href="https://docs.bitsky.ai/overview#task">Tasks</a> created by <a href="https://docs.bitsky.ai/overview#retailer">Retailers</a>, and send successfully executed Tasks which contains crawled raw data(e.g. <code>HTML</code>) back to correspond Retailers. A <a href="https://docs.bitsky.ai/overview#producer">Producer</a> needs to connect to a <b>Producer Configuration</b> use <b>Global ID</b>. If you are using <a href="http://bitsky.ai/">BitSky Desktop Application</a>, it includes two Producers: <a href="https://docs.bitsky.ai/user-manual/headless-producer">Headless Producer</a>, <a href="https://docs.bitsky.ai/user-manual/http-producer">HTTP Producer</a> to help you getting start',
  'app.containers.Producers.deleteProducerDescription':
    'Are you sure delete this Producer Configuration?',
  'app.containers.Producers.deleteProducerSuccessful': 'Delete Producer Configuration Successful',
  'app.containers.Producers.producerName': 'Name',
  'app.containers.Producers.producerNamePlaceholder':
    'Please enter your Producer Configuration Name',
  'app.containers.Producers.producerNameInvalid':
    'Producer Configuration Name is invalid, please enter 1 to 100 characters',
  'app.containers.Producers.producerNameExample': 'Hello World',
  'app.containers.Producers.producerNameDescription':
    'Give a meaningful name to this Producer Configuration, between 1 to 100 characters',
  'app.containers.Producers.producerDescription': 'Description',
  'app.containers.Producers.producerDescriptionPlaceholder':
    'Type some words to describe this Producer Configuration',
  'app.containers.Producers.producerDescriptionInvalid':
    'Producer Configuration description is too long, please enter 1 to 200 characters',
  'app.containers.Producers.producerDescriptionExample': 'My First Producer Configuration',
  'app.containers.Producers.producerDescriptionDescription':
    'Give a meaningful description to this Producer Configuration, between 1 to 200 characters',
  'app.containers.Producers.baseURL': 'Base URL',
  'app.containers.Producers.baseURLEmptyError': 'Please enter a valid base URL',
  'app.containers.Producers.baseURLExample': 'http://localhost:3000',
  'app.containers.Producers.baseURLDescription':
    'Base url of your service producer, make sure BitSky Producer can access your service producer',
  'app.containers.Producers.registerProducerSuccessful': 'Register Retailer Service Successful',
  'app.containers.Producers.healthDescription':
    'Health check API endpoint for your Retailer Service(e.g. HTTP <span class="ant-typography"><code>/health</code></span>) that returns the health of your Retailer Service. HTTP status is <span class="ant-typography"><code>2xx</code></span> means health, otherwise means unhealth. <a href="https://microservices.io/patterns/observability/health-check-api.html" target="_blank">Learn More.</a>',
  'app.containers.Producers.producerType': 'Producer Type',
  'app.containers.Producers.producerTypePlaceHolder': 'Please select your Producer Type',
  'app.containers.Producers.producerTypeDescription':
    'Please select your Producer Type. <a href="https://docs.bitsky.ai/overview#producer" target="_blank">Learn More.</a>',
  'app.containers.Producers.browserExtensionProducer': 'Browser Extension Producer',
  'app.containers.Producers.headlessProducer': 'Headless Producer',
  'app.containers.Producers.httpProducer': 'HTTP Producer',
  'app.containers.Producers.producerConfiguration': 'Configuration',
  'app.containers.Producers.producerConfigurationDescription':
    'Configure your producer based on your need, otherwise you can keep it as default.',
  'app.containers.Producers.activeProducer': 'Active',
  'app.containers.Producers.watchingNewJobDescription':
    'After you configure correctly, then you can active this producer, it will check whether has new tasks need to collect every {pollingInterval} second. You can change this value in <a href="#pollingInterval">Polling Interval</a>',
  'app.containers.Producers.privateMode': 'Private Mode',
  'app.containers.Producers.privateModeDescription':
    'Private mode means your producer will only collect tasks that created by yourself',
  'app.containers.Producers.switchOn': 'ON',
  'app.containers.Producers.switchOff': 'OFF',
  'app.containers.Producers.bitskyBaseURL': 'BitSky Base URL',
  'app.containers.Producers.bitskyBaseURLPlaceholder': 'Please enter a valid URL',
  'app.containers.Producers.bitskyBaseURLExample': 'https://www.bitsky.ai',
  'app.containers.Producers.bitskyBaseURLDescription':
    'Base url of your BitSky. For example: <span class="ant-typography"><code>https://www.bitsky.ai</code></span>',
  'app.containers.Producers.invalidURL':
    'The url you enter is invalid, please enter valid url. For example: https://www.bitsky.ai',
  'app.containers.Producers.invalidInteger': 'Please enter valid integer',
  'app.containers.Producers.pollingInterval': 'Polling Interval',
  'app.containers.Producers.pollingIntervalPlaceholder':
    'Please enter polling interval value, like 30',
  'app.containers.Producers.pollingIntervalExample': '30',
  'app.containers.Producers.pollingIntervalDescription':
    'How frequently to check whether need to collect new tasks',
  'app.containers.Producers.maxWaitingTime': 'Max Waiting Time',
  'app.containers.Producers.maxWaitingTimePlaceholder': 'Please enter waiting time, like 5',
  'app.containers.Producers.maxWaitingTimeExample': '5',
  'app.containers.Producers.maxWaitingTimeDescription':
    'Max waiting time between two collecting jobs. Value Range: <span class="ant-typography"><code>[(Max\n      Waiting Time/2), Max Waiting Time]</code></span>',
  'app.containers.Producers.maxCollectTime': 'Max Collect Time',
  'app.containers.Producers.maxCollectTimePlaceholder': 'Please enter max collect time, like 10000',
  'app.containers.Producers.maxCollectTimeExample': '10000',
  'app.containers.Producers.maxCollectTimeDescription':
    'Browser has memory leak issue if continue to open urls. To avoid this, need to close window when reach max collect times. Collect Time equal to how many request send to BitSky to get task.',
  'app.containers.Producers.producerIdleTime': 'Producer Idle Time',
  'app.containers.Producers.producerIdleTimePlaceholder':
    'Please enter producer idel time value, like 50',
  'app.containers.Producers.producerIdleTimeExample': '50',
  'app.containers.Producers.producerIdleTimeDescription':
    'How long time browser need to wait to restart collect tasks after close browser window. This time is used for browser to release memory.',
  'app.containers.Producers.concurrentCollectTasks': 'Concurrent Collect Tasks',
  'app.containers.Producers.concurrentCollectTasksPlaceholder':
    'Please enter concurrent collect tasks, like 1',
  'app.containers.Producers.concurrentCollectTasksExample': '1',
  'app.containers.Producers.concurrentCollectTasksDescription':
    'How many tasks need to be concurrent collected',
  'app.containers.Producers.requestTimeout': 'Request Timeout',
  'app.containers.Producers.requestTimeoutPlaceholder':
    'Please enter request timeout value, like 90',
  'app.containers.Producers.requestTimeoutExample': '90',
  'app.containers.Producers.requestTimeoutDescription':
    'If the request takes longer than <span class="ant-typography"><code>timeout</code></span>, the request will be aborted',
  'app.containers.Producers.maxRetryTime': 'Max Retry Time',
  'app.containers.Producers.maxRetryTimePlaceholder': 'Please enter max retry time value, like 3',
  'app.containers.Producers.maxRetryTimeExample': '3',
  'app.containers.Producers.maxRetryTimeDescription':
    'Max retry time if send collected tasks fail, if retried max time, then it will send back to BitSky and mark those tasks fail',
  'app.containers.Producers.httpMethod': 'HTTP Method',
  'app.containers.Producers.httpMethodPlaceHolder': 'Please select your HTTP method',
  'app.containers.Producers.httpMethodDescription':
    'Please select your HTTP method. <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods" target="_blank">Learn More.</a>',
  'app.containers.Producers.urlPath': 'URL Path',
  'app.containers.Producers.urlPathPlaceHolder': 'Please enter your URL path',
  'app.containers.Producers.urlPathDescription':
    'URL path of your RESTFul API. <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#Path" target="_blank">Learn More.</a>',
  'app.containers.Producers.healthTitle': 'Health Check',
  'app.containers.Producers.getTasks': 'Get Tasks',
  'app.containers.Producers.getTasksDescription':
    "Configure RESTFul API to get tasks from BitSky. Normally you don't need to change this value, only change this when you re-implement BitSky. ",
  'app.containers.Producers.unregisterProducer': 'Unregister Producer',
  'app.containers.Producers.unregisterProducerDescription':
    "You need to register this producer before you can use it.  <a href='https://docs.bitsky.ai/how-tos/how-to-register-an-producer' target='_blank'>How to register a Producer</a>",
  'app.containers.Producers.checkingBitSkyHealth': 'Checking BitSky health... [ {method} ] {url}',
  'app.containers.Producers.activateDescription':
    'Activate this producer, after activate then this producer will start collect tasks',
  'app.containers.Producers.deactivateDescription':
    'Deactivate this producer, after deactivate then this producer will stop collect tasks',
  'app.containers.Producers.disconnectDescription':
    'Disconnect all the producer currently connect to this producer, after disconnect successful will generate new globalId',
  'app.containers.Producers.activateProducerSuccess': 'Successfully activate this producer',
  'app.containers.Producers.deactivateProducerSuccess': 'Successfully deactivate this producer',
  'app.containers.Producers.disconnectProducerSuccess': 'Successfully disconnect this producer',
};
