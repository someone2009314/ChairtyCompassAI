import requests

response = requests.get("https://ipgeolocation.abstractapi.com/v1/?api_key=9cc7d7cbc17a4a20b2eb1087327ef45c&ip_address=216.125.39.134")
print(response.status_code)
print(response.content)