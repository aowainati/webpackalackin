import myLocalIp from 'my-local-ip';

// While we'd prefer to use a `.local` hostname, it's not practical in many
// situations: Android doesn't resolve `.local` at all, public wifi, etc.
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
