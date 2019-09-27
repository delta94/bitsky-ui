var scope = 'app.containers.Intelligences';
var msg = {
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Intelligences',
  },
  intelligences: {
    id: `${scope}.intelligences`,
    defaultMessage: 'Intelligences',
  },
  emptyIntelligences: {
    id: `${scope}.emptyIntelligences`,
    defaultMessage: `You don't have any <a href="https://docs.munew.io/guide/concepts/intelligence" target="_blank">Intelligences</a>`,
  },
  registerNow: {
    id: `${scope}.registerNow`,
    defaultMessage: `Register`,
  },
  pauseAll: {
    id: `${scope}.pauseAll`,
    defaultMessage: "Pause {intelligenceNumber} intelligences"
  },
  resumeAll: {
    id: `${scope}.resumeAll`,
    defaultMessage: "Resume {intelligenceNumber} intelligences"
  },
  deleteAll: {
    id: `${scope}.deleteAll`,
    defaultMessage: "Delete {intelligenceNumber} intelligences"
  }
};
var obj = {};

for(var key in msg){
    if(msg.hasOwnProperty(key)){
        obj[msg[key].id]=msg[key].defaultMessage
    }
}

console.log(JSON.stringify(obj));
