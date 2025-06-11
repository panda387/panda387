const imageGroups = [
  {
    title: "현재 사용 가능한 언어",
    images: [
      {
        src: "images/c.jpg",
        alt: "c언어 이미지",
        width: 50,
        height: 50,
        link: "https://github.com/panda387/catandsoup_ver2.git",
      },
    ],
  },
  {
    title: "학습 진행 중",
    images: [
      {
        src: "images/c++.svg",
        alt: "c++언어 이미지",
        width: 50,
        height: 50,
      },
      {
        src: "images/unreal.jpg",
        alt: "unreal 이미지",
        width: 50,
        height: 50,
      },
      {
        src: "images/csharp.jpg",
        alt: "c# 이미지",
        width: 50,
        height: 50,
      },
      {
        src: "images/unity.jpg",
        alt: "unity 이미지",
        width: 50,
        height: 50,
      },
    ],
  },
  {
    title: "희망 직무",
    content: ["게임 개발자", "게임 기획자"],
  },
  {
    title: "프로젝트",
    content: [
      "(유니티)슈팅게임",
      "(유니티)뱀서라이크",
      "(유니티)점프게임",
      "(언리얼 할 예정)FPS 게임",
      "(언리얼 할 예정)점프게임",
    ],
  },
];

const projectLinks = {
  "(유니티)슈팅게임": "https://youtu.be/ETYzjbnLixY?si=y0Mf_AjwSVsrT4R5",
  "(유니티)뱀서라이크": "https://youtu.be/MmW166cHj54?si=Y5Wo7h5jlooCACGZ",
  "(유니티)점프게임": "https://youtu.be/v_Y5FH_tCpc?si=UtoCsSt2sV52pN-j",
};

const jobLinks = {
  "게임 개발자":
    "https://www.work.go.kr/consltJobCarpa/srch/jobInfoSrch/summaryExmpl.do?jobNm=133204",
  "게임 기획자":
    "https://www.work.go.kr/consltJobCarpa/srch/jobDic/jobDicDtlInfo.do?pageType=jobDicSrchByJobCl&jobCode=2224&jobSeq=2",
};

window.onload = function () {
  const container = document.getElementById("image-container");

  
  imageGroups.forEach((group) => {
      const groupDiv = document.createElement("div");
    groupDiv.className = "image-group";

    const title = document.createElement("h3");
    title.textContent = group.title;
    groupDiv.appendChild(title);
    
    if (group.images) {
      group.images.forEach((imgInfo) => {
        if (imgInfo.link) {
          // 링크가 있는 경우 a 태그로 감싸기
          const link = document.createElement("a");
          link.href = imgInfo.link;
          link.target = "_blank";

          const img = document.createElement("img");
          img.src = imgInfo.src;
          img.alt = imgInfo.alt;
          img.width = imgInfo.width;
          img.height = imgInfo.height;

          link.appendChild(img);
          groupDiv.appendChild(link);
        } else {
          // 기존 이미지 처리
          const img = document.createElement("img");
          img.src = imgInfo.src;
          img.alt = imgInfo.alt;
          img.width = imgInfo.width;
          img.height = imgInfo.height;
          groupDiv.appendChild(img);
        }
      });
    } else if (group.content) {
      group.content.forEach((text) => {
        const p = document.createElement("p");
        p.textContent = text;
        p.className = jobLinks[text] ? "job-title" : "project-title";
        
        if (projectLinks[text] || jobLinks[text]) {
            const link = document.createElement("a");
          link.href = projectLinks[text] || jobLinks[text];
          link.className = jobLinks[text] ? "job-title" : "project-title";
          link.textContent = text;
          link.target = "_blank";
          groupDiv.appendChild(link);
        } else {
            groupDiv.appendChild(p);
        }
      });
    }
    container.appendChild(groupDiv);
});
};

// 다크 모드 상태 복원
const darkMode = localStorage.getItem("darkMode");
if (darkMode === "true") {
  document.body.classList.add("dark-mode");
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark-mode")
  );
}
