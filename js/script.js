function 매직8볼() {
  const 응답들 = [
    "확실합니다.",
    "주변에 도움을 구해보세요.",
    "의심의 여지없이 그렇습니다.",
    "분명히 그렇습니다.",
    "믿어도 좋습니다.",
    "내가 보기엔 그렇습니다.",
    "아마도 그렇습니다.",
    "전망이 좋습니다.",
    "네.",
    "예감이 좋습니다.",
    "포기하지 마세요.",
    "나중에 다시 물어보세요.",
    "지금은 하지 않는 것이 좋습니다.",
    "조금 더 기다리는 것이 좋습니다.",
    "지금은 예측할 수 없습니다.",
    "집중하고 다시 물어보세요.",
    "기대하지 마세요.",
    "내 대답은 '아니요'입니다.",
    "아닐 확률이 매우 높습니다.",
    "전망이 좋지 않습니다.",
    "매우 의심스럽습니다.",
    "상당히 그렇습니다.",
    "오늘은 그런 날입니다.",
    "지금은 확실하지 않습니다.",
    "당신의 직감을 믿으세요.",
    "다시 한 번 물어보세요.",
    "곧 알게 될 것입니다.",
    "긍정적인 결과가 예상됩니다.",
    "전혀 그렇지 않습니다.",
    "현재로서는 그렇습니다.",
    "질문을 다시 생각해보세요.",
    "아니오.",
    "조금 더 기다려보세요.",
    "자신감을 가지세요.",
    "오늘은 피하는 게 좋겠습니다.",
    "곧 알 수 있을 것입니다.",
    "의심해보세요.",
    "상황이 좋지 않습니다.",
    "그러지마세요.",
    "참고 기다려보세요.",
    "글쎄요.",
    "망설이지 마세요.",
    "걱정하지 마세요.",
    "고민해보세요.",
    "쓸데없는 고민.",
    "다시 생각해보세요.",
    "할 수 있다면 하세요.",
    "언젠가.",
    "한번 시도해보세요.",
    "그럴리 없어요.",
    "한 숨 돌리고 다시 생각해보세요.",
    "가능합니다.",
    "괜찮아 보입니다.",
    "꿈도 꾸지마세요.",
    "내 정보로는 별로.",
    "가능성 있습니다.",
    "가능성이 낮습니다.",
    "분명히 돼요.",
    "마음이 시키는대로.",
    "생각하는 대로 돼요.",
    "당신은 이미 답을 알고 있어요.",
    "어차피 마음대로 할거면서.",
  ];

  const 질문 = document.getElementById("question").value;
  if (질문.trim() === "") {
    alert("질문을 입력하세요.");
    return;
  }

  const magicBall = document.getElementById("magicBall");
  const result = document.getElementById("result");

  magicBall.classList.add("shake");

  setTimeout(() => {
    magicBall.classList.remove("shake");
    const 대답 = 응답들[Math.floor(Math.random() * 응답들.length)];
    result.innerHTML = "매직8볼🎱 : " + 대답;
    result.style.opacity = 1;
  }, 500);
}
