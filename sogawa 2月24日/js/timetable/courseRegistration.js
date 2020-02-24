var pageNum = localStorage.getItem('num'.toString());
				// 赤沢ここから
				$(function(){
    
					$('#ajax').on('click',function(){
				   
					 $.ajax({
					  url:'../ajax完成.php', //送信先
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