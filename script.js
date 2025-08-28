const ChildBot = {
  memory: [],
  teachAlphabet: function() {
    return "🔤 الحروف العربية: أ، ب، ت، ث، ج، ح، خ، د، ذ، ر، ز...";
  },
  generateStory: function() {
    return "📖 في يوم من الأيام، كان هناك أرنب صغير يحب القفز بين الزهور. وفي أحد الأيام، قابل سلحفاة حكيمة علّمته الصبر...";
  },
  respondToEmotion: function(input) {
    if (input.includes("حزين")) {
      return "😢 أنا آسف لسماع ذلك. هل تريد أن نرسم شيئًا جميلًا معًا؟";
    } else if (input.includes("سعيد")) {
      return "🎉 رائع! دعنا نحتفل مع أغنية صغيرة!";
    } else {
      return "🤔 هل يمكنك أن تخبرني أكثر عن شعورك؟";
    }
  },
  saveExperience: function(text) {
    this.memory.push(text);
    return `✅ تم حفظ: "${text}" في ذاكرة رفيق الصغار.`;
  }
};

function teachAlphabet() {
  document.getElementById("responseArea").innerText = ChildBot.teachAlphabet();
}

function generateStory() {
  document.getElementById("responseArea").innerText = ChildBot.generateStory();
}

function respondToEmotion() {
  const input = document.getElementById("childInput").value;
  const response = ChildBot.respondToEmotion(input);
  document.getElementById("responseArea").innerText = response;
}

function saveExperience() {
  const input = document.getElementById("childInput").value;
  const result = ChildBot.saveExperience(input);
  document.getElementById("responseArea").innerText = result;
}
