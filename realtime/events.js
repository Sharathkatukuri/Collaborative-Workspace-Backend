const emitEvent = (event, payload) => {
  console.log(`[Realtime Event] ${event}`, payload);
};

module.exports = emitEvent
// export default emitEvent;
