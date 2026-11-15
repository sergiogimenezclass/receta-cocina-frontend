import pytest
from app.services.deepseek_service import deepseek_backend_service

def test_deepseek_parse_json():
    raw_markdown = """```json
    {
      "proteina_ids": ["comp_prot_14"],
      "vegetal_ids": ["comp_veg_2"],
      "carbo_ids": ["comp_carb_3"],
      "grasa_ids": ["comp_fat_6"],
      "modo": "caliente",
      "titulo": "Milanesa Napolitana con Puré",
      "pasos": ["Hacer puré", "Cocinar mila", "Servir con queso y tomate"],
      "sugerencia_opcional": null
    }
    ```"""
    res = deepseek_backend_service._parse_json_response(raw_markdown)
    assert res["titulo"] == "Milanesa Napolitana con Puré"
    assert res["proteina_ids"] == ["comp_prot_14"]
    assert res["modo"] == "caliente"
