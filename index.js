$(document).ready(()=>{


	Findmovie();


document.getElementById("searchbytitle").focus();

});

let Findmovie = ()=>{

 let flag=0;
 	let link;
 	let time=0;
 	let y;
    let text1 = 0;
    let name=0;
 $("#btn1").click(()=>{
 	
 	

 	text1= document.getElementById('searchbytitle').value;
 	time=document.getElementById('searchbyyear').value;

 	if(text1.length==0){
 	$( ".searchclass" ).effect( "shake");
 }
 	else
	{   

		if(flag==0){
			link=`https://www.omdbapi.com/?apikey=7818611e&t=${text1}`;
		}


	
		if(flag==1){
		 link=`https://www.omdbapi.com/?apikey=7818611e&i=${text1}`;
}
		if(flag==2){
			link=`https://www.omdbapi.com/?apikey=7818611e&t=${text1}&y=${time}`;
		}
		
		$.ajax({
			type:'GET',
			dataType:'json',
			url:link,
			success: (data) =>{
				name=data.Title;

				if(name!==undefined){
                  
				

					console.log(data.Year);
				$('#temp').remove();
				
				if(data.Poster=="N/A"){
					data.Poster="na.jpg";
				}
				
				
				let info = ` <div id="temp">
							    	 <div class="zero">
  <div class="one">
                     <img src="${data.Poster}" class="poster">
                   </div>
                   <div class="two">
                      <div class="container">
                       <p><b>Title:</b> ${data.Title}</p>
                        <p><b>Plot:</b><br>${data.Plot}</p>
                        <p><b>Year:</b> ${data.Year}</p>
                        <p><b>Released:</b> ${data.Released}</p>
                        <p><b>Cast:</b> ${data.Actors}</p>
                        <p><b>Director:</b> ${data.Director}</p>
                        <p><b>Runtime:</b> ${data.Runtime}</p>
                         <p><b>Laungage:</b>${data.Language}</p>
                         <p><b>Awards:</b>${data.Awards}</p>
                          <p><b>Metascore:</b>${data.Metascore}</p>
                           <p><b>imdb Rating:</b>${data.imdbRating}</p>
                            <p><b>Box Office:</b>${data.BoxOffice}</p>
                             <p><b>Production:</b>${data.Production}</p>
                              <p><b>Website:</b>${data.Website}</p>
                      </div>
                   </div>
                 </div>
<div>`
								$(".displaydata").append(info);	}
								else{
									alert("invalid input")
								}
							
							
			},
			error: (data) => {
				alert("some error occured")
			}
		});
		
		
	}
	document.getElementById("infor").focus();

 });

 $("#option2").click(()=>{
 	$("#searchbyid").css("display","flex");
 	$("#searchbytitle").css("display","none");
 	$("#searchbyyear").css("display","none");
 	flag=1;
		});
 $("#option3").click(()=>{
 	
 	$("#searchbytitle").css("display","flex");
 	$("#searchbyid").css("display","none");
 	$("#searchbyyear").css("display","flex");
 	flag=2;
 	
		});
  $("#option1").click(()=>{
 	
 	$("#searchbytitle").css("display","flex");
 	$("#searchbyid").css("display","none");
 	$("#searchbyyear").css("display","none");
 	flag=0;
 	
		});
	
}