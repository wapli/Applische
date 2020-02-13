
//ここは金本。htmlの初期化ボタンの関数定義・id変更した。
            function clearData(){
            ret=window.confirm("初期化しますか？");
            if(ret){
                localStorage.clear();
                location.reload();
                // localStorage.removeItem("RoomContentmemo"+i.toString());//教室名
                // localStorage.removeItem('RoomContentmemo'+i.toString());//講義名
                // localStorage.removeItem('attendance'+i.toString());//出席回数
                // localStorage.removeItem('late'+i.toString());//遅刻回数
                // localStorage.removeItem('absence'+i.toString());//欠席回数
                // localStorage.removeItem('color'+i.toString());
            
                // attendanceCountNum=0;
                // lateCountNum=0;
                // absenceCountNum=0;
                // localStorage.setItem('attendance'+i.toString(), attendanceCountNum);
                // localStorage.setItem('late'+i.toString(), lateCountNum);
                // localStorage.setItem('absence'+i.toString(), absenceCountNum);
                }
                else{}
        }

