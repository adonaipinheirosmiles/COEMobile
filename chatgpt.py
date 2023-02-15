import openai
import os
import requests
import json

# Configura a chave de API da OpenAI
openai.api_key = os.environ["OPENAI_API_KEY"]

# Função que usa o ChatGPT para avaliar o código
def evaluate_code(code):
    # Define a entrada para o modelo GPT-3 da OpenAI
    prompt = (f"Please evaluate this code:\n{code}\n\n"
              f"Score the code from 1 to 10, with 1 being the worst and 10 being the best.\n"
              f"Comment on the strengths and weaknesses of the code.")
    # Realiza uma solicitação à API do modelo GPT-3 para obter a avaliação do código
    response = openai.Completion.create(
        engine="davinci-codex",
        prompt=prompt,
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.7,
    )
    # Extrai a resposta do modelo GPT-3 e retorna os dados relevantes
    rating = response.choices[0].text.split("\n")[0]
    comment = "\n".join(response.choices[0].text.split("\n")[1:])
    return rating, comment

# Função que adiciona comentários ao PR
def add_comment(pr_url, comment):
    # Define o cabeçalho e o corpo da solicitação para adicionar um comentário ao PR
    headers = {'Authorization': 'Bearer ' + os.environ["GITHUB_TOKEN"]}
    data = {'body': comment}
    # Realiza a solicitação à API do GitHub para adicionar um comentário ao PR
    response = requests.post(pr_url + "/comments", headers=headers, json=data)
    return response.status_code

if __name__ == "__main__":
    # Obtém a URL do pull request do ambiente
    pr_url = os.environ["GITHUB_SERVER_URL"] + os.environ["GITHUB_REPOSITORY"] + "/pulls/" + os.environ["PULL_REQUEST_NUMBER"]
    # Obtém o nome do arquivo do ambiente
    filename = os.environ["INPUT_FILE_NAME"]
    # Obtém o caminho completo do arquivo
    filepath = os.path.join(os.getcwd(), filename)
    # Lê o código a ser avaliado do arquivo
    with open(filepath, 'r') as f:
        code = f.read()
    # Avalia o código usando o ChatGPT
    rating, comment = evaluate_code(code)
    # Adiciona um comentário ao pull request com a avaliação e os comentários do ChatGPT
    add_comment(pr_url, f"**Rating:** {rating}\n\n{comment}")