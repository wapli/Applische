	//現在の日時を取得
	var now = new Date();
	var Year = now.getFullYear();
	var Month = now.getMonth()+1;
	var hizuke = now.getDate();
	var Hour = now.getHours();
	var Min = now.getMinutes();
	


var pageNum = localStorage.getItem('num'.toString());



var season=localStorage.getItem("season");
var attendanceCountNum = localStorage.getItem(season+'attendance'+pageNum.toString());
var lateCountNum = localStorage.getItem(season+'late'+pageNum.toString());
var absenceCountNum = localStorage.getItem(season+'absence'+pageNum.toString());
console.log( attendanceCountNum);
console.log(document.getElementById("attendanceCount"));
document.getElementById("attendanceCount").innerText=attendanceCountNum+"回";
document.getElementById("lateCount").innerText=lateCountNum+"回";
document.getElementById("absenceCount").innerText=absenceCountNum+"回";
						//ボタンを取得
						var attendance= document.getElementById("check-attendance");
						var late=document.getElementById("check-late");
						var absence=document.getElementById("check-absence");

					//回数を表示させる場所を取得している
						var attendanceCount=document.getElementById("attendanceCount");
						var lateCount=document.getElementById("lateCount");
						var absenceCount=document.getElementById("absenceCount");

						attendanceDetails=document.getElementById('attendanceDetails');
						attendanceTime=document.getElementById('attendanceTime');

						lateDetails=document.getElementById('lateDetails');
						lateTime=document.getElementById('lateTime');


						//出欠回数０回を表示するために記述している
						absenceDetails=document.getElementById('absenceDetails');
						absenceTime=document.getElementById('absenceTime');
						
						var attendanceCountNum = localStorage.getItem(season+'attendance'+pageNum.toString());
						var lateCountNum = localStorage.getItem(season+'late'+pageNum.toString());
						var absenceCountNum = localStorage.getItem(season+'absence'+pageNum.toString());
						console.log(attendanceCountNum);
						
						attendance.addEventListener("click", () => {//出席ボタンを押したときの処理
							localStorage.setItem(season+'attendanceDate'+attendanceCountNum.toString(),Year + '年' + Month + '月' + hizuke + '日' + Hour +'時' + Min + '分');
							attendanceCountNum++;
							localStorage.setItem(season+'attendance'+pageNum.toString(), attendanceCountNum);
							document.getElementById("attendanceCount").innerText=attendanceCountNum+"回";

						});
						late.addEventListener("click", () => {//遅刻ボタンを押したときの処理
							localStorage.setItem(season+'lateDate'+lateCountNum.toString(),Year + '年' + Month + '月' + hizuke + '日' + Hour +'時' + Min + '分');
							lateCountNum++;
							localStorage.setItem(season+'late'+pageNum.toString(), lateCountNum);
							document.getElementById("lateCount").innerText=lateCountNum+"回";
						});
						absence.addEventListener("click", () => {//欠席ボタンを押したときの処理
							localStorage.setItem(season+'absenceDate'+absenceCountNum.toString(),Year + '年' + Month + '月' + hizuke + '日' + Hour +'時' + Min + '分');
							absenceCountNum++;
							localStorage.setItem(season+'absence'+pageNum.toString(), absenceCountNum);
							document.getElementById("absenceCount").innerText=absenceCountNum+"回";
						});

						attendanceCount.addEventListener("click", () => {//出席回数の詳細を表示
							for(var i=0;i<attendanceCountNum;i++){
								var attendanceDate = localStorage.getItem(season+'attendanceDate'+i.toString());
								attendanceTime.insertAdjacentHTML ('afterbegin', '<ons-list-item>'+attendanceDate+'</ons-list-item><br>');
							}
							attendanceDetails.style.display='block';
						});

						lateCount.addEventListener("click", () => {//出席回数の詳細を表示
							for(var i=0;i<lateCountNum;i++){
								var lateDate = localStorage.getItem(season+'lateDate'+i.toString());
								lateTime.insertAdjacentHTML ('afterbegin', '<ons-list-item>'+lateDate+'</ons-list-item><br>');
							}
							lateDetails.style.display='block';
						});

						absenceCount.addEventListener("click", () => {//出席回数の詳細を表示
							for(var i=0;i<absenceCountNum;i++){
								var absenceDate = localStorage.getItem(season+'absenceDate'+i.toString());
								absenceTime.insertAdjacentHTML ('afterbegin', '<ons-list-item>'+absenceDate+'</ons-list-item><br>');
							}
							absenceDetails.style.display='block';
						});

						//詳細ページを閉じる
						document.getElementById('attendanceDetailsClose').addEventListener("click", () => {
							attendanceDetails.style.display='none';
						});
						document.getElementById('lateDetailsClose').addEventListener("click", () => {
							lateDetails.style.display='none';
						});
						document.getElementById('absenceDetailsClose').addEventListener("click", () => {
							absenceDetails.style.display='none';
						});


						//詳細情報を削除する
						document.getElementById('checkAttendanceClear').addEventListener("click", () => {
							var result = confirm('出欠記録を初期化してもよろしいですか');
							if( result ) {
						console.log('削除しました');
								for(var i=0;i<attendanceCountNum;i++){
									localStorage.removeItem(season+'attendanceDate'+i.toString());
									
	
								}
								for(var i=0;i<lateCountNum;i++){
									localStorage.removeItem(season+'lateDate'+i.toString());
									
								}
								for(var i=0;i<absenceCountNum;i++){
									localStorage.removeItem(season+'absenceDate'+i.toString());
								}
								attendanceTime.innerText="　　　";
								lateTime.innerText="　　　";
								absenceTime.innerText="　　　";
								attendanceCountNum=0;
								lateCountNum=0;
								absenceCountNum=0;
								localStorage.setItem(season+'attendance'+pageNum.toString(), attendanceCountNum);
								localStorage.setItem(season+'late'+pageNum.toString(), lateCountNum);
								localStorage.setItem(season+'absence'+pageNum.toString(), absenceCountNum);
								document.getElementById("attendanceCount").innerText=attendanceCountNum+"回";
								document.getElementById("lateCount").innerText=lateCountNum+"回";
								document.getElementById("absenceCount").innerText=absenceCountNum+"回";
							}
							else {
							console.log('キャンセルしました');
                            }
                        });