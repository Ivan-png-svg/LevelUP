from google import genai
client = genai.Client(api_key='AIzaSyCyK2I1Z1aH1EEyOYOoeLmM_hvYxizBimE')
r = client.models.generate_content(model='gemini-2.0-flash', contents='say hi')
print(r.text)