
'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const encoding = require("encoding");

app.set('port', (process.env.PORT || 5000))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// index
app.get('/', function (req, res) {
	res.send('hello world i am a secret bot')
})

// for facebook verification
app.get('/webhook/', function (req, res) {
	if (req.query['hub.verify_token'] === 'my_voice_is_my_password_verify_me') {
		res.send(req.query['hub.challenge'])
	} else {
		res.send('Error, wrong token')
	}
})


var subQuesNow=0
var jsonTotal = '[{"id":"aaa1063791606986419","score":"0","qid":"000"}]'
var point = JSON.parse(jsonTotal);
var jason='{"title":"","answer": [{"context": ""}],"question": [{  "Qtitle": "", "Qoption": [{ "context":""}]}]}'
var qAndAns = JSON.parse(jason); 
var numsOfQuestOption
var numsOfQuest 
var numsOfAns 
var maxPoint 
var pointRange 
var numOfOption
var obj1=[  ]
var obj2=[  ]
var obj3=[  ]
var obj4=[  ]
var objTitle = [ ]
var jsonM = '{"title": "\u9700\u8981\u54ea\u7a2e\u985e\u578b\u7684\u5fc3\u7406\u6e2c\u9a57?","subtitle": "o1","button": "b1"}',/////回傳資料用  在function sendGenericMessage(sender)
optionM = JSON.parse(jsonM);
var json1 = '{"title": "\u611b\u60c5","subtitle": "o1","button": "b1","score":"0"}',
option1 = JSON.parse(json1);
var json2 = '{"title": "\u9322\u8ca1","subtitle": "o2","button": "b2","score":"0"}',
option2 = JSON.parse(json2);
var json3 = '{"title": "\u8da3\u5473","subtitle": "o3","button": "b3","score":"0"}',
option3 = JSON.parse(json3);
var json4 = '{"title": "\u500b\u6027","subtitle": "o4","button": "b4","score":"0"}',
option4 = JSON.parse(json4);
var json5 = '{"title": "\u672a\u4f86","subtitle": "o5","button": "b5","score":"0"}',
option5 = JSON.parse(json5);

function fun1(s){
request('http://140.116.78.35:8000/fb/?q=love', function (error, response, body) {
	  if (!error && response.statusCode == 200) {
		qAndAns = JSON.parse(body)
		sendTextMessage(s,"\u4e3b\u984c\u76ee\u662f: "+qAndAns.title)///主題目
		numsOfQuestOption=qAndAns.question[0].Qoption.length///選項
		numsOfQuest = qAndAns.question.length///1小提
		numsOfAns = qAndAns.answer.length//答案
		maxPoint = (numsOfQuestOption-1)*numsOfQuest///最高分
		pointRange = maxPoint / numsOfAns///5分
	  for(var a=0;a<numsOfQuest-1;a++)
	 { 
		numOfOption =qAndAns.question[a].Qoption.length;
		objTitle[a]=qAndAns.question[a].Qtitle

		if(numOfOption==2){
			obj1[a]=qAndAns.question[a].Qoption[0].context;
			obj2[a]=qAndAns.question[a].Qoption[1].context;
		}
			
		else if(numOfOption==3){
			obj1[a]=qAndAns.question[a].Qoption[0].context;
			obj2[a]=qAndAns.question[a].Qoption[1].context;
			obj3[a]=qAndAns.question[a].Qoption[2].context;
		}
		
		else {
			obj1[a]=qAndAns.question[a].Qoption[0].context;
			obj2[a]=qAndAns.question[a].Qoption[1].context;
			obj3[a]=qAndAns.question[a].Qoption[2].context;
			obj4[a]=qAndAns.question[a].Qoption[3].context;
		}
		
	 }

 }
})
}

function fun2(s){
request('http://140.116.78.35:8000/fb/?q=money', function (error, response, body) {
	  if (!error && response.statusCode == 200) {
		qAndAns = JSON.parse(body)
		sendTextMessage(s,"\u4e3b\u984c\u76ee\u662f: "+qAndAns.title)///主題目
		numsOfQuestOption=qAndAns.question[0].Qoption.length///選項
		numsOfQuest = qAndAns.question.length///1小提
		numsOfAns = qAndAns.answer.length//答案
		maxPoint = (numsOfQuestOption-1)*numsOfQuest///最高分
		pointRange = maxPoint / numsOfAns///5分
	  for(var a=0;a<numsOfQuest-1;a++)
	 { 
		numOfOption =qAndAns.question[a].Qoption.length;
		objTitle[a]=qAndAns.question[a].Qtitle

		if(numOfOption==2){
			obj1[a]=qAndAns.question[a].Qoption[0].context;
			obj2[a]=qAndAns.question[a].Qoption[1].context;
		}
			
		else if(numOfOption==3){
			obj1[a]=qAndAns.question[a].Qoption[0].context;
			obj2[a]=qAndAns.question[a].Qoption[1].context;
			obj3[a]=qAndAns.question[a].Qoption[2].context;
		}
		
		else {
			obj1[a]=qAndAns.question[a].Qoption[0].context;
			obj2[a]=qAndAns.question[a].Qoption[1].context;
			obj3[a]=qAndAns.question[a].Qoption[2].context;
			obj4[a]=qAndAns.question[a].Qoption[3].context;
		}
		
	 }

 }
})
}

function fun3(s){
request('http://140.116.78.35:8000/fb/?q=interest', function (error, response, body) {
	  if (!error && response.statusCode == 200) {
		qAndAns = JSON.parse(body)
		sendTextMessage(s,"\u4e3b\u984c\u76ee\u662f: "+qAndAns.title)///主題目
		numsOfQuestOption=qAndAns.question[0].Qoption.length///選項
		numsOfQuest = qAndAns.question.length///1小提
		numsOfAns = qAndAns.answer.length//答案
		maxPoint = (numsOfQuestOption-1)*numsOfQuest///最高分
		pointRange = maxPoint / numsOfAns///5分
	  for(var a=0;a<numsOfQuest-1;a++)
	 { 
		numOfOption =qAndAns.question[a].Qoption.length;
		objTitle[a]=qAndAns.question[a].Qtitle

		if(numOfOption==2){
			obj1[a]=qAndAns.question[a].Qoption[0].context;
			obj2[a]=qAndAns.question[a].Qoption[1].context;
		}
			
		else if(numOfOption==3){
			obj1[a]=qAndAns.question[a].Qoption[0].context;
			obj2[a]=qAndAns.question[a].Qoption[1].context;
			obj3[a]=qAndAns.question[a].Qoption[2].context;
		}
		
		else {
			obj1[a]=qAndAns.question[a].Qoption[0].context;
			obj2[a]=qAndAns.question[a].Qoption[1].context;
			obj3[a]=qAndAns.question[a].Qoption[2].context;
			obj4[a]=qAndAns.question[a].Qoption[3].context;
		}
		
	 }

 }
})
}

function fun4(s){
request('http://140.116.78.35:8000/fb/?q=kidney', function (error, response, body) {
	  if (!error && response.statusCode == 200) {
		qAndAns = JSON.parse(body)
		sendTextMessage(s,"\u4e3b\u984c\u76ee\u662f: "+qAndAns.title)///主題目
		numsOfQuestOption=qAndAns.question[0].Qoption.length///選項
		numsOfQuest = qAndAns.question.length///1小提
		numsOfAns = qAndAns.answer.length//答案
		maxPoint = (numsOfQuestOption-1)*numsOfQuest///最高分
		pointRange = maxPoint / numsOfAns///5分
	  for(var a=0;a<numsOfQuest-1;a++)
	 { 
		numOfOption =qAndAns.question[a].Qoption.length;
		objTitle[a]=qAndAns.question[a].Qtitle
		
		if(numOfOption==2){
			obj1[a]=qAndAns.question[a].Qoption[0].context;
			obj2[a]=qAndAns.question[a].Qoption[1].context;
		}
			
		else if(numOfOption==3){
			obj1[a]=qAndAns.question[a].Qoption[0].context;
			obj2[a]=qAndAns.question[a].Qoption[1].context;
			obj3[a]=qAndAns.question[a].Qoption[2].context;
		}
		
		else {
			obj1[a]=qAndAns.question[a].Qoption[0].context;
			obj2[a]=qAndAns.question[a].Qoption[1].context;
			obj3[a]=qAndAns.question[a].Qoption[2].context;
			obj4[a]=qAndAns.question[a].Qoption[3].context;
		}
		
	 }

 }
})
}

function fun5(s){
request('http://140.116.78.35:8000/fb/?q=future', function (error, response, body) {
	  if (!error && response.statusCode == 200) {
		qAndAns = JSON.parse(body)
		sendTextMessage(s,"\u4e3b\u984c\u76ee\u662f: "+qAndAns.title)///主題目
		numsOfQuestOption=qAndAns.question[0].Qoption.length///選項
		numsOfQuest = qAndAns.question.length///1小提
		numsOfAns = qAndAns.answer.length//答案
		maxPoint = (numsOfQuestOption-1)*numsOfQuest///最高分
		pointRange = maxPoint / numsOfAns///5分
	  for(var a=0;a<numsOfQuest-1;a++)
	 { 
		numOfOption =qAndAns.question[a].Qoption.length;
		objTitle[a]=qAndAns.question[a].Qtitle

		if(numOfOption==2){
			obj1[a]=qAndAns.question[a].Qoption[0].context;
			obj2[a]=qAndAns.question[a].Qoption[1].context;
		}
			
		else if(numOfOption==3){
			obj1[a]=qAndAns.question[a].Qoption[0].context;
			obj2[a]=qAndAns.question[a].Qoption[1].context;
			obj3[a]=qAndAns.question[a].Qoption[2].context;
		}
		
		else {
			obj1[a]=qAndAns.question[a].Qoption[0].context;
			obj2[a]=qAndAns.question[a].Qoption[1].context;
			obj3[a]=qAndAns.question[a].Qoption[2].context;
			obj4[a]=qAndAns.question[a].Qoption[3].context;
		}
		
	 }

 }
})
}




// to post data
app.post('/webhook/', function (req, res) {
	let messaging_events = req.body.entry[0].messaging
	var inJson=false;
	for (let i = 0; i < messaging_events.length; i++) {
		let event = req.body.entry[0].messaging[i]
		let sender = event.sender.id
		if (event.message && event.message.text) {//收到 message
			let text = event.message.text
			for (var k =0;k<point.length;k++) {
				if(point[k].id==sender){
					point.num=parseInt(point[k].score, 10);
					inJson=true;
				}
			}
			if(inJson==false){
				var data={
					"id":sender,
					"score":"0",
					"qid":"000"}
					point.push(data);
				for (var g =0;g<point.length;g++) {
					if(point[g].id==sender){
						point.num=parseInt(point[g].score, 10);
					}
				}
				point.num=parseInt(0, 10);
			}
			switch(text)
			{
				case '\u611b\u60c5':            //愛情
				fun1(sender)
				setTimeout(function() { nextOption(sender,subQuesNow)
					}, 1800);
				  break;	
				  
				case '\u9322\u8ca1': 			//錢財
				fun2(sender)
				setTimeout(function() { nextOption(sender,subQuesNow)
					}, 1800);
				  break;
				  
				case '\u8da3\u5473': 			//趣味
				fun3(sender)
				setTimeout(function() { nextOption(sender,subQuesNow)
					}, 1800);
				  break;
				  
				case '\u500b\u6027':			//個性
				fun4(sender)
				setTimeout(function() { nextOption(sender,subQuesNow)
					}, 1800);
				  break;
				  
				case '\u672a\u4f86':			//未來
				fun5(sender)
				setTimeout(function() { nextOption(sender,subQuesNow)
					}, 1800);
				  break;
				  
				case 'gogogo':
					 sendGenericMessage(sender)
				  break;
				case 'GOGOGO':
					 sendGenericMessage(sender)
				  break;
				case 'GoGoGo':
					 sendGenericMessage(sender)
				  break;
				case 'Gogogo':
					 sendGenericMessage(sender)
				  break;
				
				case  obj1[subQuesNow]:						///選項一
				subQuesNow=subQuesNow+1
				option1.num = parseInt(option1.score, 10);
				point.num = point.num + option1.num;

				for (var t =0;t<point.length;t++) {
					if(point[t].id==sender){
						point[t].score = point.num;
						break;
					}
				}
				if(subQuesNow!=numsOfQuest-1){   
					setTimeout(function() { nextOption(sender,subQuesNow)}, 1500);
				}
				else{				///最後一題
					result(sender)
					for (var t =0;t<point.length;t++) {
						if(point[t].id==sender){
							point[t].score = 0;
							subQuesNow=0;
							break;
						}
					}
				}
				break;
				  
				case obj2[subQuesNow]:
				subQuesNow=subQuesNow+1
				option2.num = parseInt(option2.score, 10);
				point.num = point.num + option2.num;
				for (var t =0;t<point.length;t++) {
					if(point[t].id==sender){
						point[t].score = point.num;
						break;
					}
				}
				if(subQuesNow!=numsOfQuest-1){  
					setTimeout(function() { nextOption(sender,subQuesNow)				}, 1500);
				}
				else{ 						///最後一題///
					result(sender)
					for (var t =0;t<point.length;t++) {
						if(point[t].id==sender){
							point[t].score = 0;
							subQuesNow=0;
							break;
						}
					}
				}
				break;
				  
				case obj3[subQuesNow]: 
				subQuesNow=subQuesNow+1
				option3.num = parseInt(option3.score, 10);
				point.num = point.num + option3.num;
				for (var t =0;t<point.length;t++) {
					if(point[t].id==sender){
						point[t].score = point.num;
						break;
					}
				}
				if(subQuesNow!=numsOfQuest-1){   ///最後一題
					setTimeout(function() { nextOption(sender,subQuesNow)}, 1500);
				}
				else{
					result(sender)
					for (var t =0;t<point.length;t++) {
						if(point[t].id==sender){
							point[t].score = 0;
							subQuesNow=0;
							break;
						}
					}
				}
				break;
				case obj4[subQuesNow]:
				
				option4.num = parseInt(option4.score, 10);
				subQuesNow=subQuesNow+1
				point.num = point.num + option4.num;
				for (var t =0;t<point.length;t++) {
					if(point[t].id==sender){
						point[t].score = point.num;
						break;
					}
				}
				if(subQuesNow!=numsOfQuest-1){   ///最後一題
					setTimeout(function() { nextOption(sender,subQuesNow)}, 1500);
				}
				else{
					result(sender)
					for (var t =0;t<point.length;t++) {
						if(point[t].id==sender){
							point[t].score = 0;
							subQuesNow=0;
							break;
						}
					}
				}
				break;
				default:
				sendTextMessage(sender,"\u4f60\u597d!\u60f3\u505a\u5fc3\u7406\u6e2c\u9a57\u8acb\u8f38\u5165 gogogo" )
				}
		}
		if (event.postback) {                            ///Postback 按鈕回傳
			let text = JSON.stringify(event.postback)
		continue
		}
	}
	res.sendStatus(200)
})

const token = "EAAFsjKIRbzIBAO3gJ8RvZCfrXtZCP3TgwIox97kAWvsayqlEQuVTyvbdMJ12vIvOZBQTZATKeXPBaELU3UbCFlJyF2flZCDwHznnMqt7LoZC9o1nFfvaN0gkpP72Sq1Fm7oMtTu7DOvekDlisM803pAcCwd9auOh7rVWEYjSyKZBAZDZD"

function sendTextMessage(sender, text) {
	let messageData = { text:text }
	
	request({
		url: 'https://graph.facebook.com/v2.6/me/messages',
		qs: {access_token:token},
		method: 'POST',
		json: {
			recipient: {id:sender},
			message: messageData,
		}
	})
}


function jsonChange(numsOfQuestOption){

	switch (numsOfQuestOption){
		case 2:
			jsonM = '{"title": qAndAns.question[subQuesNow].Qtitle ,"subtitle": "o1","button": "b1","score":"0"}',
			optionM = JSON.parse(jsonM);
			json1 = '{"title": qAndAns.question[subQuesNow].Qoption[0].context,"subtitle": "o1","button": "b1","score":"0"}',/////選項一
			option1 = JSON.parse(json1);
			json2 = '{"title": qAndAns.question[subQuesNow].Qoption[1].context,"subtitle": "o2","button": "b2","score":"1"}',/////選項二
			option2 = JSON.parse(json2);
			break;
		case 3:
			jsonM = '{"title":  qAndAns.question[subQuesNow].Qtitle,"subtitle": "o1","button": "b1","score":"0"}',
			optionM = JSON.parse(jsonM);
			json1 = '{"title": qAndAns.question[subQuesNow].Qoption[0].context,"subtitle": "o1","button": "b1","score":"0"}',/////選項一
			option1 = JSON.parse(json1);
			json2 = '{"title": qAndAns.question[subQuesNow].Qoption[1].context,"subtitle": "o2","button": "b2","score":"1"}',/////選項二
			option2 = JSON.parse(json2);
			json3 = '{"title": qAndAns.question[subQuesNow].Qoption[2].context,"subtitle": "o3","button": "b3","score":"2"}',/////選項三
			option3 = JSON.parse(json3);	
			break;		
		case 4:
			jsonM = '{"title":  "\u5b50\u984c\u76ee","subtitle": "o1","button": "b1","score":"0"}',
			optionM = JSON.parse(jsonM);
			json1 = '{"title": qAndAns.question[subQuesNow].Qoption[0].context,"subtitle": "o1","button": "b1","score":"0"}',/////選項一
			option1 = JSON.parse(json1);
			json2 = '{"title": qAndAns.question[subQuesNow].Qoption[1].context,"subtitle": "o2","button": "b2","score":"1"}',/////選項二
			option2 = JSON.parse(json2);
			json3 = '{"title": qAndAns.question[subQuesNow].Qoption[2].context,"subtitle": "o3","button": "b3","score":"2"}',/////選項三
			option3 = JSON.parse(json3);	
			json4 = '{"title": qAndAns.question[subQuesNow].Qoption[3].context,"subtitle": "o4","button": "b4","score":"3"}',/////選項四
			option4 = JSON.parse(json4);
			break;

	}
}


function result(sender){
	
	if(point.num<=maxPoint && point.num>maxPoint-pointRange)///我是D
	{
		sendTextMessage(sender,qAndAns.answer[0].context )
	}else if(point.num<=maxPoint-pointRange && point.num>maxPoint-2*pointRange)///我是D
	{
		sendTextMessage(sender,qAndAns.answer[1].context )
	}else if(point.num<=maxPoint-2*pointRange && point.num>maxPoint-3*pointRange)///我是D
	{
		sendTextMessage(sender,qAndAns.answer[2].context )
	}else if(point.num<=maxPoint-3*pointRange && point.num>maxPoint-4*pointRange)///我是D
	{
		sendTextMessage(sender,qAndAns.answer[3].context )
	}
	else if(point.num<=maxPoint-4*pointRange && point.num>maxPoint-5*pointRange)///我是D
	{
		sendTextMessage(sender,qAndAns.answer[1].context )
	}else if(point.num<=maxPoint-5*pointRange && point.num>=maxPoint-6*pointRange)///我是D
	{
		sendTextMessage(sender,qAndAns.answer[2].context )
	}

}


function sendGenericMessage(sender) {		
    let messageData = {
		"text":optionM.title,
		"quick_replies":[
		  {
			"content_type":"text",
			"title":option1.title,
			"payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED"
		  },{
			"content_type":"text",
			"title":option2.title,
			"payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED"
		  },{
			"content_type":"text",
			"title":option3.title,
			"payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED"
		  },{
			"content_type":"text",
			"title":option4.title,
			"payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED"
		  },{
			"content_type":"text",
			"title":option5.title,
			"payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED"
		  }
		]
	}
		
    request({
	    url: 'https://graph.facebook.com/v2.6/me/messages',
	    qs: {access_token:token},
	    method: 'POST',
	    json: {
		    recipient: {id:sender},
		    message: messageData,
	    }
    })
}

function nextOption(sender,subQuesNow){
	let  messageData ;
	switch (numOfOption ){
			
		case 2:
		messageData = {
			"text":"\u5b50\u554f\u984c :"+objTitle[subQuesNow],
			"quick_replies":[
			  {
				"content_type":"text",
				"title":obj1[subQuesNow],
				"payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED"
			  },{
				"content_type":"text",
				"title":obj2[subQuesNow],
				"payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED"
			  }
			]
		}
		break;
		
		case 3:
		messageData = {
			"text":"\u5b50\u554f\u984c :"+objTitle[subQuesNow],
			"quick_replies":[
			  {
				"content_type":"text",
				"title":obj1[subQuesNow],
				"payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED"
			  },{
				"content_type":"text",
				"title":obj2[subQuesNow],
				"payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED"
			  },{
				"content_type":"text",
				"title":obj3[subQuesNow],
				"payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED"
			  },
			]
		}

		break;
		
		case 4:
		messageData = {
			"text":"\u5b50\u554f\u984c :"+objTitle[subQuesNow],
			"quick_replies":[
			  {
				"content_type":"text",
				"title":obj1[subQuesNow],
				"payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED"
			  },{
				"content_type":"text",
				"title":obj2[subQuesNow],
				"payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED"
			  },{
				"content_type":"text",
				"title":obj3[subQuesNow],
				"payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED"
			  },{
				"content_type":"text",
				"title":obj4[subQuesNow],
				"payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED"
			  }
			]
		}

		break;

		default:
		sendTextMessage(sender, "\u8a0a\u606f\u6536\u767c\u932f\u8aa4\uff0c\u8acb\u91cd\u65b0\u8f38\u5165\u4e00\u6b21" )
		
	}
    request({
	    url: 'https://graph.facebook.com/v2.6/me/messages',
	    qs: {access_token:token},
	    method: 'POST',
	    json: {
		    recipient: {id:sender},
		    message: messageData,
	    }
    })
}

app.listen(app.get('port'), function() {
	console.log('running on port', app.get('port'))
})

