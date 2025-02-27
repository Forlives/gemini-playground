export const CONFIG = {
    API: {
        VERSION: 'v1alpha',
        MODEL_NAME: 'models/gemini-2.0-flash-exp'
    },
    // You can change the system instruction to your liking
    SYSTEM_INSTRUCTION: {
        TEXT: "你是我的智能助手。你可以看到和听到我，并用中文语音和文字回复我。如果被问到你不知道的事情，你可以使用搜索工具来寻找答案。请始终使用中文与我交流。",
    },
    // Default audio settings
    AUDIO: {
        SAMPLE_RATE: 16000,
        OUTPUT_SAMPLE_RATE: 24000,      // If you want to have fun, set this to around 14000 (u certainly will)
        BUFFER_SIZE: 2048,
        CHANNELS: 1
    },
    // If you are working in the RoArm branch 
    // ROARM: {
    //     IP_ADDRESS: '192.168.1.4'
    // }
  };
  
  export default CONFIG; 
