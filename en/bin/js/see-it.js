// JavaScript Document
function myFunction(num) {
	var nstr = "";
	var nstr = ($('#roles option:selected').html());
	$('#firms').prop('selectedIndex',0);
	$('.ibm-case-container').hide();
	switch(num) {
		case 1:
  			$("#divstudy1,#divstudy3,#divstudy5,#divstudy6,#divstudy7,#divstudy11,#divstudy13,#divstudy14,#divstudy16").show();
 			break;
		case 2:
  			$("#divstudy1,#divstudy3,#divstudy5,#divstudy6,#divstudy7,#divstudy11,#divstudy14,#divstudy16").show();
  			break;
		case 3:
  			$("#divstudy1,#divstudy2,#divstudy3,#divstudy4,#divstudy5,#divstudy6,#divstudy8,#divstudy9,#divstudy10,#divstudy11,#divstudy12,#divstudy13,#divstudy14,#divstudy15,#divstudy16").show();
  			break;
		case 4:
  			$("#divstudy2,#divstudy3,#divstudy4,#divstudy6,#divstudy8,#divstudy9,#divstudy12,#divstudy15").show();
  			break;
		case 5:
  			$("#divstudy1,#divstudy2,#divstudy3,#divstudy4,#divstudy5,#divstudy6,#divstudy7,#divstudy8,#divstudy9,#divstudy10,#divstudy11,#divstudy12,#divstudy13,#divstudy14,#divstudy15,#divstudy16").show();
  			break;
		case 6:
  			$("#divstudy1,#divstudy3,#divstudy5,#divstudy6,#divstudy7,#divstudy11,#divstudy13,#divstudy14,#divstudy15,#divstudy16").show();
  			break;
		case 7:
  		$("#divstudy2,#divstudy4,#divstudy6,#divstudy8,#divstudy9,#divstudy10,#divstudy11,#divstudy15").show();
  			break;
		default:
  		$("#divstudy1,#divstudy2,#divstudy3,#divstudy4,#divstudy5,#divstudy6,#divstudy7,#divstudy8,#divstudy9,#divstudy10,#divstudy11,#divstudy12,#divstudy13,#divstudy14,#divstudy15,#divstudy16").show();
	}
	{ibmStats.event({'ibmEV' : 'dropdown', 'ibmEvAction' : 'business needs', 'ibmEvTarget' : nstr});return true;}
	}

function companyFunction(num) {
	var cstr = "";
	var cstr = ($('#firms option:selected').html());
	$('#roles').prop('selectedIndex',0);
	$('.ibm-case-container').hide();
	switch(num) {
		case 1:
  			$("#divstudy1").show();
  		break;
		case 2:
  			$("#divstudy2").show();
  		break;
		case 3:
  			$("#divstudy3").show();
  		break;
		case 4:
  			$("#divstudy4").show();
  		break;
		case 5:
  			$("#divstudy5").show();
  		break;
		case 6:
  			$("#divstudy6").show();
 		break;
		case 7:
  			$("#divstudy7").show();
  		break;
		case 8:
  			$("#divstudy8, #divstudy9").show();
  		break;
		case 9:
  			$("#divstudy10").show();
  		break;
		case 10:
  			$("#divstudy11").show();
  		break;
		case 11:
  			$("#divstudy12").show();
  		break;
		case 12:
  			$("#divstudy13").show();
  		break;
		case 13:
  			$("#divstudy14").show();
  		break;
		case 14:
  			$("#divstudy15").show();
  		break;
		case 15:
  			$("#divstudy16").show();
  		break;
		default:
  			$("#divstudy1,#divstudy2,#divstudy3,#divstudy4,#divstudy5,#divstudy6,#divstudy7,#divstudy8,#divstudy9,#divstudy10,#divstudy11,#divstudy12,#divstudy13,#divstudy14,#divstudy15,#divstudy16").show();
}
	{ibmStats.event({'ibmEV' : 'dropdown', 'ibmEvAction' : 'companies', 'ibmEvTarget' : cstr});return true;}
}