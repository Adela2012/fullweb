'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)

	const res = await uniCloud.httpclient.request(
		'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=WDWt5vie2bNBUMjXtYkexm1a&client_secret=p3NKlG6fkYFL3emGuakYprTWgkhgdURI&', {
			dataType: "json"
		});
	const access_token = res.data.access_token;
	const classify_res = await uniCloud.httpclient.request(
		"https://aip.baidubce.com/rest/2.0/image-classify/v2/advanced_general", {
			data: {
				access_token: access_token,
				image: event.image
			},
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			dataType: "json"
		});
	//返回数据给客户端
	return classify_res.data;
};
