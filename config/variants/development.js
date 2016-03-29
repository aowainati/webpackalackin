import myLocalIp from 'my-local-ip';

// By using your machine's IP address rather than localhost, you can now share
// your dev server w/ other folk on the network, and everything else should wire
// up without extra configuration!
const DEV_MACHINE_ADDRESS = myLocalIp();

/**
 * Configuration specific to the development variant.
 */
export default {
  // We don't have a circle build number; and let's just assume that we're
  // up to date - 'cause dev mode!
  buildNum: Number.MAX_SAFE_INTEGER,
  apiEndpoint: `http://${DEV_MACHINE_ADDRESS}:3000`,
};
