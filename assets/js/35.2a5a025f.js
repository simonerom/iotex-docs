(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{532:function(t,e,a){"use strict";a.r(e);var r=a(34),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pebble-tracker-dashboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pebble-tracker-dashboard"}},[t._v("#")]),t._v(" Pebble Tracker Dashboard")]),t._v(" "),a("h2",{attrs:{id:"writing-s3-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-s3-data"}},[t._v("#")]),t._v(" Writing S3 data")]),t._v(" "),a("ol",[a("li",[t._v("Trackers collect data and places it in the corresponding topic of IOT-Core, such as "),a("code",[t._v("nrf-352656100458374")]),t._v(".")]),t._v(" "),a("li",[t._v("IOT-Core listens for the corresponding topic and adds the post-processing command: write to S3. Pay attention to the setting of role permissions. Make sure that the specified S3 bucket has writable permissions.")]),t._v(" "),a("li",[t._v("IOT-Core has Web-UI to mock data into topic, which can be manually filled with several records for verification.")])]),t._v(" "),a("p",[t._v("The file format of S3 is determined in the IOT-Core [Action] configuration. The content of the file is the active data of tracker. Such as:")]),t._v(" "),a("ul",[a("li",[t._v("GPS position information.")]),t._v(" "),a("li",[t._v("Temperature, Pessure and Humidity.")]),t._v(" "),a("li",[t._v("Gyroscope: AX AY AZ acceleration, GX GY GZ gravity acceleration.")]),t._v(" "),a("li",[t._v("Voltage data: VBAT.")])]),t._v(" "),a("h2",{attrs:{id:"converting-tracker-data-to-grtafana-dashboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#converting-tracker-data-to-grtafana-dashboard"}},[t._v("#")]),t._v(" Converting tracker data to Grtafana dashboard")]),t._v(" "),a("h3",{attrs:{id:"create-a-kinesis-data-stream"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-kinesis-data-stream"}},[t._v("#")]),t._v(" Create a kinesis data stream")]),t._v(" "),a("p",[t._v("Kinesis data stream is used to hook up lambda data processing functions. Enter the kinesis console and create a kinesis data stream. The number of slices is set to 1 and the name is "),a("code",[t._v("test-stream")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"create-iam-role"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-iam-role"}},[t._v("#")]),t._v(" Create IAM role")]),t._v(" "),a("ul",[a("li",[t._v("Create Role: "),a("code",[t._v("test-stream")]),t._v(", permission: "),a("code",[t._v("AmazonKinesisFullAccess")])]),t._v(" "),a("li",[t._v("Create Role: "),a("code",[t._v("lambda_role")]),t._v(", permission: "),a("code",[t._v("AWSLambdaKinesisExecutionRole")])])]),t._v(" "),a("h3",{attrs:{id:"iot-core-to-kinesis-data-stream"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iot-core-to-kinesis-data-stream"}},[t._v("#")]),t._v(" IOT-Core to Kinesis data stream")]),t._v(" "),a("ul",[a("li",[t._v("Enter the IOT core console and click "),a("code",[t._v("Action")]),t._v(" in the left sidebar")]),t._v(" "),a("li",[t._v("Create a rule with the following parameters:\n"),a("ul",[a("li",[t._v("The name is "),a("code",[t._v("test_stream")])]),t._v(" "),a("li",[t._v("SQL like: "),a("code",[t._v("select * from 'topic / nrf-352656100458374'")])]),t._v(" "),a("li",[t._v("Add operation: send the message to Amazon kinesis stream, and select role as "),a("code",[t._v("test-stream")]),t._v(".")])])])]),t._v(" "),a("h3",{attrs:{id:"create-lambda-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-lambda-function"}},[t._v("#")]),t._v(" Create Lambda Function")]),t._v(" "),a("ul",[a("li",[t._v("Create a lambda function:\n"),a("ul",[a("li",[t._v("Name: testInfluxdb")]),t._v(" "),a("li",[t._v("Runtime: Python 2.7")]),t._v(" "),a("li",[t._v("Role: "),a("code",[t._v("lambda_role")])])])]),t._v(" "),a("li",[t._v("Click this function:\n"),a("ul",[a("li",[t._v("Add Trigger: Kinesis data stream, choose "),a("code",[t._v("test-stream")]),t._v(".")]),t._v(" "),a("li",[t._v("Edit python scripts")]),t._v(" "),a("li",[t._v("Save")])])])]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('import urllib2\nimport base64\nimport json\nimport time\n\ng_influx_addr = "http://54.225.17.236:8086/write?db=pebble"\ndef write_point(info):\n    #print str(info)\n    dbreq = urllib2.Request(g_influx_addr, data = info)\n    urllib2.urlopen(dbreq)\n\ndef lambda_handler(event, context):\n    req_data = ""\n    for record in event[\'Records\']:\n        payload = base64.b64decode(record[\'kinesis\'][\'data\'])\n        print "Decoded payload: " + payload\n        data = json.loads(payload)\n        # temperature\n        if \'T(degC)\' in data:\n            T = data[\'T(degC)\']\n            temp = "temperature,name=temperature C=" + str(T)\n            #temp += " " + str(data[\'timestamp\'] * 1000000)\n            temp += " " + str(int(time.time()) * 1000000000)\n            #print "req_str: " + str(temp)\n            req_data += "\\n"\n            req_data += temp\n        else:\n            print("not found T")\n        # pressure\n        if \'P(hPa)\' in data:\n            P = data[\'P(hPa)\']\n            temp = "pressure,name=pressure P=" + str(P)\n            #temp += " " + str(data[\'timestamp\'] * 1000000)\n            temp += " " + str(int(time.time()) * 1000000000)\n            #print "req_str: " + str(temp)\n            req_data += "\\n"\n            req_data += temp\n        else:\n            print("not found P")\n        # location\n        if "latitude" in data and "longitude" in data:\n            latitude = data["latitude"]\n            longitude = data["longitude"]\n            temp = "location,name=location latitude=" + str(latitude)\n            temp += ",longitude=" + str(longitude)\n            #temp += " " + str(data[\'timestamp\'] * 1000000)\n            temp += " " + str(int(time.time()) * 1000000000)\n            req_data += "\\n"\n            req_data += temp\n        else:\n            print "not found longitude latitude"\n    if req_data == "":\n        return\n    print "req_data: " + str(req_data)\n    write_point(req_data)\n')])])]),a("h3",{attrs:{id:"grafana-dashboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grafana-dashboard"}},[t._v("#")]),t._v(" Grafana Dashboard")]),t._v(" "),a("p",[t._v("http://docs.grafana.org/")])])}),[],!1,null,null,null);e.default=n.exports}}]);