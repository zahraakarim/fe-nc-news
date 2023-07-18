export function dateFormatter(created_at) {
  return new Date(created_at).toLocaleDateString();
}

export function capitalisedTopic(topic) {
  return topic.charAt(0).toUpperCase() + topic.slice(1);
}
