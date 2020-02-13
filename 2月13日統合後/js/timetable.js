	//現在の日時を取得
	var now = new Date();
	var Year = now.getFullYear();
	var Month = now.getMonth()+1;
	var hizuke = now.getDate();
	var Hour = now.getHours();
	var Min = now.getMinutes();
	
	
let flag; //実行すべき機能の判別
document.addEventListener("init", (event) => {
	var season=localStorage.getItem("season");
	var seasonTitle=document.getElementById("seasonTitle");
	if(season=="Spring")seasonTitle.innerText="春学期";
	else				seasonTitle.innerText="秋学期";
	

		 //localStorage.clear();
		





		var pageNum; //ページの番号を代入する
		if (event.target.id = "ons-timetable.html") {
			for(var n=0;n<42;n++){
				N=n.toString();
				var colorNum=Number(localStorage.getItem(season+'color'+n.toString()));;
				var lectures=document.getElementById("a-"+N.toString());
				
				 changeColor(colorNum,lectures);
			}
			/*時間割表色付けここまで--------------------------------曽川*/



			
			if(localStorage.getItem('fastFlag')==0){//アプリを実行したときの一回目に実行すること
				var Season="Spring";
				for(var n=0;n<=1;n++){
				for(var i=0;i<42;i++){
					localStorage.setItem(Season+'attendance'+i.toString(),0);
					localStorage.setItem(Season+'late'+i.toString(),0);
					localStorage.setItem(Season+'absence'+i.toString(),0);
						//赤沢ここから
						localStorage.setItem(Season+'kamoku-code'+i.toString(),"　　　");
						localStorage.setItem(Season+'kyouka'+i.toString(),"　　　");
						localStorage.setItem(Season+'kyoushi'+i.toString(),"　　　");
						localStorage.setItem(Season+'place'+i.toString(),"　　　");
						localStorage.setItem(Season+'tani'+i.toString(),"　　　");
						//赤沢ここまで
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
		
		for(var i=0;i<42;i++){
			document.getElementById("a-"+i.toString()+"c").innerText=localStorage.getItem(season+'kyouka'+i.toString());
			document.getElementById("a-"+i.toString()+"p").innerText=localStorage.getItem(season+'RoomContentmemo'+i.toString());
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
								console.log(j);
								switch (j) {
								case 0: //出欠
								lecture.pushPage('attendanceConfirmation');
									
								flag=0;
														break;
								case 1: //メモ
									lecture.pushPage('memo');
									flag=1;
														break;
								case 2: //シラバス
									lecture.pushPage('syllabus');
									flag=2;
										break;
								case 3: //e-class
									flag=3;
														break;
								case 4: //評価基準
									lecture.pushPage('EvaluationCriteria');
									flag=4;
										break;
								case 5: //休講情報
									flag=5;
										break;
								case 6: //科目登録
										lecture.pushPage('courseRegistration');
										
										flag = 6;
										break;

								case 7://色の変更-------曽川
										lecture.pushPage('changeColor');
										flag = 7;
										break;
								////色の変更ここまで-------曽川
								default:
										alert("エラー");
										break;
								}
						});
				}
			
				
					
			
				//各ページの機能
				console.log("flagは" + flag);
				switch (flag) {
				case 0: //出欠
			

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
								lateTime.insertAdjacentHTML ('afterbegin', '<ons-list-item>'+lateDate+'秒</ons-list-item><br>');
							}
							lateDetails.style.display='block';
						});

						absenceCount.addEventListener("click", () => {//出席回数の詳細を表示
							for(var i=0;i<absenceCountNum;i++){
								var absenceDate = localStorage.getItem(season+'absenceDate'+i.toString());
								absenceTime.insertAdjacentHTML ('afterbegin', '<ons-list-item>'+absenceDate+'秒</ons-list-item><br>');
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
							break;
							//ここまで　赤沢 2/5
				case 1: //メモ----曽川
				var memoSaveButton=document.getElementById("memoSaveButton");
				
					document.getElementById("memoarea").value=localStorage.getItem(season+"MemoContent"+pageNum.toString());
					memoSaveButton.addEventListener("click", () => {
						var memoareaContent=document.getElementById("memoarea").value;
						localStorage.setItem(season+"MemoContent"+pageNum.toString(),memoareaContent);
						alert("保存しました")
						lecture.popPage();
					},false);
					
			
				
							
				//変更点ここまでーーー曽川	
						break;
				case 2: //シラバス
						break;
				case 3: //e-class
						break;
				case 4: //評価基準
						break;
				case 5: //休講情報
						break;
				case 6: //科目登録

				   
				// 赤沢ここから
				$(function(){
    
					$('#ajax').on('click',function(){
				   
					 $.ajax({
					  url:'./ajax完成.php', //送信先
					  type:'POST', //送信方法
					  datatype: 'json', //受け取りデータの種類
					  data:{
					   'kyouka' : $('#kyouka_text').val(),
					   'id' : $('#id_number').val(),
					   'kyoushi': $('#kyoushi_text').val()
					   }
					  })
					 // Ajax通信が成功した時
					 .done( function(data) {
						console.log(data);
						for(var i=0;i<data.length;i++){
							resultColor='background-color:rgb(255, 255, 255)';
							if(i%2==1){
								resultColor='background-color:rgb(192, 192, 192)';
							}
							document.getElementById("result").insertAdjacentHTML ('beforeend','<tr id=\"result'+i.toString()+'\" style=\"'+resultColor+'\"><td>'+data[i].id+'</td><td>'+data[i].kyouka+'</td><td>'+data[i].kyoushi+'</td><td>'+data[i].place+'</td><td>'+data[i].tani+'</td></tr>');
							
						  
						  $('#result'+i.toString()).html();
						  console.log('通信成功');
						
						}


						for(let count=0;count<data.length;count++){
							console.log(count);
						  document.getElementById("result"+count.toString()).addEventListener("click", () => {
						
						  localStorage.setItem(season+'kamoku-code'+pageNum.toString(), data[count].id);
						  localStorage.setItem(season+'kyouka'+pageNum.toString(), data[count].kyouka);
						  localStorage.setItem(season+'kyoushi'+pageNum.toString(), data[count].kyoushi);
						  localStorage.setItem(season+'place'+pageNum.toString(), data[count].place);
						  localStorage.setItem(season+'tani'+pageNum.toString(), data[count].tani);
						  localStorage.setItem(season+'color'+pageNum.toString(),4);
						  var lectures=document.getElementById("a-"+pageNum.toString());
						  changeColor(4,lectures);
						  var n=0
						  for(var i=0;i<42;i++){
							document.getElementById("a-"+i.toString()+"c").innerText=localStorage.getItem('kyouka'+i.toString());
						  }
						  alert(data[count].kyouka+"を登録しました");
							
						});
					  }
					  })
					  // Ajax通信が失敗した時
					  .fail( function(data) {
					  $('#result').html(data);
					  console.log('通信失敗');
					  console.log(data);
					  })
					}); //#ajax click end
				   
				   }); //END
				   //赤沢ここまで
				break;
				case 7://色ーーーー曽川
				var colorCell=document.getElementsByClassName("colorCell");
				for (let colorNum = 0; colorNum < colorCell.length; colorNum++) {
					colorCell[colorNum].addEventListener("click", ()=>{
							lecture.popPage();

						
							if(colorNum == 0){
								localStorage.setItem(season+'color'+pageNum.toString(), colorNum+12);
								var lecturePage=document.getElementById("a-"+pageNum.toString());
								changeColor(colorNum+12,lecturePage);
								}
								else{localStorage.setItem(season+'color'+pageNum.toString(), colorNum);
								var lecturePage=document.getElementById("a-"+pageNum.toString());
								changeColor(colorNum,lecturePage);
							}
					});
			}

	break;
	}
flag=-1;
}



document.getElementById('SpringButton').addEventListener("click", () => {
	localStorage.setItem("season","Spring");					
	location.reload();
	
	  
});

document.getElementById("AutumnButton").addEventListener("click", () => {
	localStorage.setItem("season","Autumn");						
	location.reload();
	
	  
});


});

function changeColor(color,lectureNum){
// console.log(color+"：色の番号");
// console.log(lectureNum+"：講義id");

switch (color) {

case 1:
	lectureNum.style.backgroundColor="#fc93ae";
	break;
case 2:
	lectureNum.style.backgroundColor="#ff6b6b";
	break;
case 3:
	lectureNum.style.backgroundColor="#c4eeee";
	break;
case 4:
	lectureNum.style.backgroundColor="#655bee";
	break;
case 5:	
	lectureNum.style.backgroundColor="#98fb98";
	break;
case 6:
	lectureNum.style.backgroundColor="#f2fdc1";
	break;
case 7:
	lectureNum.style.backgroundColor="#fdc867";
	break;
case 8:
	lectureNum.style.backgroundColor="#fafaa0";
	break;
case 9:
	lectureNum.style.backgroundColor="#b8a5e4";
	break;
case 10:	
	lectureNum.style.backgroundColor="#d0ffc0";
	break;
case 11:
	lectureNum.style.backgroundColor="#f0ffff";
	break;
case 12:
	lectureNum.style.backgroundColor="#fdc3cc";
	break;
default:
	break;
}
}
//色関数ここまで　曽川


