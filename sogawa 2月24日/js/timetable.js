document.addEventListener("init", (event) => {
	var season=localStorage.getItem("season");
		 //localStorage.clear();
		var pageNum; //ページの番号を代入する
		if (event.target.id = "ons-timetable.html") {
			/*時間割表色付けここまで--------------------------------曽川*/	
			if(localStorage.getItem('fastFlag')==0){//アプリを実行したときの一回目に実行すること
				var Season="Spring";
				for(var n=0;n<=1;n++){
				for(var i=0;i<42;i++){
					localStorage.setItem(Season+'attendance'+i.toString(),0);
					localStorage.setItem(Season+'late'+i.toString(),0);
					localStorage.setItem(Season+'absence'+i.toString(),0);
						localStorage.setItem(Season+'kamoku-code'+i.toString(),"　　　");
						localStorage.setItem(Season+'kyouka'+i.toString(),"　　　");
						localStorage.setItem(Season+'kyoushi'+i.toString(),"　　　");
						localStorage.setItem(Season+'place'+i.toString(),"　　　");
						localStorage.setItem(Season+'tani'+i.toString(),"　　　");
					localStorage.setItem(Season+'RoomContentmemo'+i.toString() ,"");
				}
				Season="Autumn";
				}	
				localStorage.setItem('fastFlag',1);
			}else if(localStorage.getItem('fastFlag')!=1){
				localStorage.setItem('fastFlag',0);
				localStorage.setItem("season","Spring");
				seasonTitle.innerText="春学期"
			}

				// 詳細ページを開く
				a = document.getElementsByClassName('a');
				lecturePage = document.getElementById('lecturePage');
				var lecturePageListItem = document.getElementsByClassName('lecturePageListItem');
				lecture = document.getElementById("1_lecture")
				for (let i = 0; i < a.length; i++) {
						a[i].addEventListener("click", () => {
								console.log(i);
								lecture.pushPage('lecturePage');
								localStorage.setItem('num', i);				
						});
				}
				//詳細の表示
				var pageNum = localStorage.getItem('num'.toString());			
				for (let j = 0; j < lecturePageListItem.length; j++) {			
						lecturePageListItem[j].addEventListener("click", () => {
								switch (j) {
								case 0: //出欠
								lecture.pushPage('attendanceConfirmation');
								break;
								case 1: //メモ
									lecture.pushPage('memo');
								break;
								case 2: //シラバス
									lecture.pushPage('syllabus');
										break;
								case 3: //e-class
							
														break;
								case 4: //評価基準
									lecture.pushPage('EvaluationCriteria');
										break;
								case 5: //休講情報
										break;
								case 6: //科目登録
										lecture.pushPage('courseRegistration');
									break;

								case 7://色の変更-------曽川
										lecture.pushPage('changeColor');
										break;
								////色の変更ここまで-------曽川
								default:
										alert("エラー");
										break;
								}
						});
				}	
}
});


