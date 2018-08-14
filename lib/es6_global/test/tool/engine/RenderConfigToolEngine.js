

import * as Caml_array from "../../../../../node_modules/bs-platform/lib/es6/caml_array.js";
import * as ParseRenderConfigService$Wonderjs from "../../../../../node_modules/wonder.js/lib/es6_global/src/service/record/main/renderConfig/ParseRenderConfigService.js";

function buildRenderConfig($staropt$star, $staropt$star$1, _) {
  var shaders = $staropt$star !== undefined ? $staropt$star : "\n\n\n{\n  \"static_branchs\": [\n    {\n      \"name\": \"modelMatrix_instance\",\n      \"value\": [\n        \"modelMatrix_noInstance\",\n        \"modelMatrix_hardware_instance\",\n        \"modelMatrix_batch_instance\"\n      ]\n    },\n    {\n      \"name\": \"normalMatrix_instance\",\n      \"value\": [\n        \"normalMatrix_noInstance\",\n        \"normalMatrix_hardware_instance\",\n        \"normalMatrix_batch_instance\"\n      ]\n    }\n  ],\n  \"dynamic_branchs\": [\n    {\n      \"name\": \"basic_map\",\n      \"condition\": \"basic_has_map\",\n      \"pass\": \"basic_map\",\n      \"fail\": \"no_basic_map\"\n    },\n    {\n      \"name\": \"common_light_map\",\n      \"condition\": \"light_has_map\",\n      \"pass\": \"common_light_map\"\n    },\n    {\n      \"name\": \"diffuse_map\",\n      \"condition\": \"has_diffuse_map\",\n      \"pass\": \"diffuse_map\",\n      \"fail\": \"no_diffuse_map\"\n    },\n    {\n      \"name\": \"specular_map\",\n      \"condition\": \"has_specular_map\",\n      \"pass\": \"specular_map\",\n      \"fail\": \"no_specular_map\"\n    }\n  ],\n  \"groups\": [\n    {\n      \"name\": \"top\",\n      \"value\": [\n        \"common\",\n        \"vertex\"\n      ]\n    },\n    {\n      \"name\": \"end\",\n      \"value\": [\n        \"end\"\n      ]\n    }\n  ],\n  \"material_shaders\": [\n    {\n      \"name\": \"render_basic\",\n      \"shader_libs\": [\n        {\n          \"type\": \"group\",\n          \"name\": \"top\"\n        },\n        {\n          \"type\": \"static_branch\",\n          \"name\": \"modelMatrix_instance\"\n        },\n        {\n          \"name\": \"basic\"\n        },\n        {\n          \"type\": \"dynamic_branch\",\n          \"name\": \"basic_map\"\n        },\n        {\n          \"name\": \"basic_end\"\n        },\n        {\n          \"type\": \"group\",\n          \"name\": \"end\"\n        }\n      ]\n    },\n    {\n      \"name\": \"front_render_light\",\n      \"shader_libs\": [\n        {\n          \"type\": \"group\",\n          \"name\": \"top\"\n        },\n        {\n          \"name\": \"normal\"\n        },\n        {\n          \"type\": \"static_branch\",\n          \"name\": \"modelMatrix_instance\"\n        },\n        {\n          \"type\": \"static_branch\",\n          \"name\": \"normalMatrix_instance\"\n        },\n        {\n          \"name\": \"light_common\"\n        },\n        {\n          \"name\": \"light_setWorldPosition\"\n        },\n        {\n          \"type\": \"dynamic_branch\",\n          \"name\": \"common_light_map\"\n        },\n        {\n          \"type\": \"dynamic_branch\",\n          \"name\": \"diffuse_map\"\n        },\n        {\n          \"type\": \"dynamic_branch\",\n          \"name\": \"specular_map\"\n        },\n        {\n          \"name\": \"no_light_map\"\n        },\n        {\n          \"name\": \"no_emission_map\"\n        },\n        {\n          \"name\": \"no_normal_map\"\n        },\n        {\n          \"name\": \"no_shadow_map\"\n        },\n        {\n          \"name\": \"light\"\n        },\n        {\n          \"name\": \"ambient_light\"\n        },\n        {\n          \"name\": \"direction_light\"\n        },\n        {\n          \"name\": \"point_light\"\n        },\n        {\n          \"name\": \"light_end\"\n        },\n        {\n          \"type\": \"group\",\n          \"name\": \"end\"\n        }\n      ]\n    }\n  ]\n}\n\n\n        ";
  var shaderLibs = $staropt$star$1 !== undefined ? $staropt$star$1 : "\n\n[\n  {\n    \"name\": \"common\",\n    \"glsls\": [\n      {\n        \"type\": \"vs\",\n        \"name\": \"common_vertex\"\n      },\n      {\n        \"type\": \"fs\",\n        \"name\": \"common_fragment\"\n      }\n    ],\n    \"variables\": {\n      \"uniforms\": [\n        {\n          \"name\": \"u_vMatrix\",\n          \"field\": \"vMatrix\",\n          \"type\": \"mat4\",\n          \"from\": \"camera\"\n        },\n        {\n          \"name\": \"u_pMatrix\",\n          \"field\": \"pMatrix\",\n          \"type\": \"mat4\",\n          \"from\": \"camera\"\n        }\n      ]\n    }\n  },\n  {\n    \"name\": \"modelMatrix_noInstance\",\n    \"glsls\": [\n      {\n        \"type\": \"vs\",\n        \"name\": \"modelMatrix_noInstance_vertex\"\n      }\n    ],\n    \"variables\": {\n      \"uniforms\": [\n        {\n          \"name\": \"u_mMatrix\",\n          \"field\": \"mMatrix\",\n          \"type\": \"mat4\",\n          \"from\": \"model\"\n        }\n      ]\n    }\n  },\n  {\n    \"name\": \"modelMatrix_hardware_instance\",\n    \"glsls\": [\n      {\n        \"type\": \"vs\",\n        \"name\": \"modelMatrix_hardware_instance_vertex\"\n      }\n    ],\n    \"variables\": {\n      \"attributes\": [\n        {\n          \"name\": \"a_mVec4_0\",\n          \"buffer\": 5,\n          \"type\": \"vec4\"\n        },\n        {\n          \"name\": \"a_mVec4_1\",\n          \"buffer\": 5,\n          \"type\": \"vec4\"\n        },\n        {\n          \"name\": \"a_mVec4_2\",\n          \"buffer\": 5,\n          \"type\": \"vec4\"\n        },\n        {\n          \"name\": \"a_mVec4_3\",\n          \"buffer\": 5,\n          \"type\": \"vec4\"\n        }\n      ]\n    }\n  },\n  {\n    \"name\": \"modelMatrix_batch_instance\",\n    \"glsls\": [\n      {\n        \"type\": \"vs\",\n        \"name\": \"modelMatrix_batch_instance_vertex\"\n      }\n    ],\n    \"variables\": {\n      \"uniforms\": [\n        {\n          \"name\": \"u_mMatrix\",\n          \"field\": \"mMatrix\",\n          \"type\": \"mat4\",\n          \"from\": \"model\"\n        }\n      ]\n    }\n  },\n  {\n    \"name\": \"vertex\",\n    \"variables\": {\n      \"attributes\": [\n        {\n          \"name\": \"a_position\",\n          \"buffer\": 0,\n          \"type\": \"vec3\"\n        }\n      ]\n    }\n  },\n  {\n    \"name\": \"basic\",\n    \"glsls\": [\n      {\n        \"type\": \"vs\",\n        \"name\": \"webgl1_basic_vertex\"\n      }\n    ]\n  },\n  {\n    \"name\": \"basic_map\",\n    \"glsls\": [\n      {\n        \"type\": \"vs\",\n        \"name\": \"webgl1_basic_map_vertex\"\n      },\n      {\n        \"type\": \"fs\",\n        \"name\": \"webgl1_basic_map_fragment\"\n      }\n    ],\n    \"variables\": {\n      \"attributes\": [\n        {\n          \"name\": \"a_texCoord\",\n          \"buffer\": 2,\n          \"type\": \"vec2\"\n        }\n      ],\n      \"uniforms\": [\n        {\n          \"name\": \"u_color\",\n          \"field\": \"color\",\n          \"type\": \"float3\",\n          \"from\": \"basicMaterial\"\n        },\n        {\n          \"name\": \"u_mapSampler\",\n          \"field\": \"map\",\n          \"type\": \"sampler2D\",\n          \"from\": \"basicMaterial\"\n        }\n      ]\n    }\n  },\n  {\n    \"name\": \"no_basic_map\",\n    \"glsls\": [\n      {\n        \"type\": \"fs\",\n        \"name\": \"webgl1_no_basic_map_fragment\"\n      }\n    ],\n    \"variables\": {\n      \"uniforms\": [\n        {\n          \"name\": \"u_color\",\n          \"field\": \"color\",\n          \"type\": \"float3\",\n          \"from\": \"basicMaterial\"\n        }\n      ]\n    }\n  },\n  {\n    \"name\": \"basic_end\",\n    \"glsls\": [\n      {\n        \"type\": \"fs\",\n        \"name\": \"webgl1_basic_end_fragment\"\n      }\n    ]\n  },\n  {\n    \"name\": \"normalMatrix_noInstance\",\n    \"glsls\": [\n      {\n        \"type\": \"vs\",\n        \"name\": \"normalMatrix_noInstance_vertex\"\n      }\n    ],\n    \"variables\": {\n      \"uniforms\": [\n        {\n          \"name\": \"u_normalMatrix\",\n          \"field\": \"normalMatrix\",\n          \"type\": \"mat3\",\n          \"from\": \"model\"\n        }\n      ]\n    }\n  },\n  {\n    \"name\": \"normalMatrix_hardware_instance\",\n    \"glsls\": [\n      {\n        \"type\": \"vs\",\n        \"name\": \"normalMatrix_hardware_instance_vertex\"\n      }\n    ],\n    \"variables\": {\n      \"attributes\": [\n        {\n          \"name\": \"a_normalVec3_0\",\n          \"buffer\": 4,\n          \"type\": \"vec3\"\n        },\n        {\n          \"name\": \"a_normalVec3_1\",\n          \"buffer\": 4,\n          \"type\": \"vec3\"\n        },\n        {\n          \"name\": \"a_normalVec3_2\",\n          \"buffer\": 4,\n          \"type\": \"vec3\"\n        }\n      ]\n    }\n  },\n  {\n    \"name\": \"normalMatrix_batch_instance\",\n    \"glsls\": [\n      {\n        \"type\": \"vs\",\n        \"name\": \"normalMatrix_batch_instance_vertex\"\n      }\n    ],\n    \"variables\": {\n      \"uniforms\": [\n        {\n          \"name\": \"u_normalMatrix\",\n          \"field\": \"normalMatrix\",\n          \"type\": \"mat3\",\n          \"from\": \"model\"\n        }\n      ]\n    }\n  },\n  {\n    \"name\": \"normal\",\n    \"variables\": {\n      \"attributes\": [\n        {\n          \"name\": \"a_normal\",\n          \"buffer\": 1,\n          \"type\": \"vec3\"\n        }\n      ]\n    }\n  },\n  {\n    \"name\": \"light_common\",\n    \"glsls\": [\n      {\n        \"type\": \"vs\",\n        \"name\": \"webgl1_frontLight_common_vertex\"\n      },\n      {\n        \"type\": \"fs\",\n        \"name\": \"webgl1_frontLight_common_fragment\"\n      }\n    ],\n    \"variables\": {\n      \"uniforms\": [\n        {\n          \"name\": \"u_specular\",\n          \"field\": \"specularColor\",\n          \"type\": \"float3\",\n          \"from\": \"lightMaterial\"\n        }\n      ]\n    }\n  },\n  {\n    \"name\": \"light_setWorldPosition\",\n    \"glsls\": [\n      {\n        \"type\": \"vs\",\n        \"name\": \"webgl1_frontLight_setWorldPosition_vertex\"\n      }\n    ]\n  },\n  {\n    \"name\": \"common_light_map\",\n    \"variables\": {\n      \"attributes\": [\n        {\n          \"name\": \"a_texCoord\",\n          \"buffer\": 2,\n          \"type\": \"vec2\"\n        }\n      ]\n    }\n  },\n  {\n    \"name\": \"diffuse_map\",\n    \"glsls\": [\n      {\n        \"type\": \"vs\",\n        \"name\": \"webgl1_diffuse_map_vertex\"\n      },\n      {\n        \"type\": \"fs\",\n        \"name\": \"webgl1_diffuse_map_fragment\"\n      }\n    ],\n    \"variables\": {\n      \"uniforms\": [\n        {\n          \"name\": \"u_diffuse\",\n          \"field\": \"diffuseColor\",\n          \"type\": \"float3\",\n          \"from\": \"lightMaterial\"\n        },\n        {\n          \"name\": \"u_diffuseMapSampler\",\n          \"field\": \"diffuseMap\",\n          \"type\": \"sampler2D\",\n          \"from\": \"lightMaterial\"\n        }\n      ]\n    }\n  },\n  {\n    \"name\": \"specular_map\",\n    \"glsls\": [\n      {\n        \"type\": \"vs\",\n        \"name\": \"webgl1_specular_map_vertex\"\n      },\n      {\n        \"type\": \"fs\",\n        \"name\": \"webgl1_specular_map_fragment\"\n      }\n    ],\n    \"variables\": {\n      \"uniforms\": [\n        {\n          \"name\": \"u_specularMapSampler\",\n          \"field\": \"specularMap\",\n          \"type\": \"sampler2D\",\n          \"from\": \"lightMaterial\"\n        }\n      ]\n    }\n  },\n  {\n    \"name\": \"no_diffuse_map\",\n    \"glsls\": [\n      {\n        \"type\": \"fs\",\n        \"name\": \"webgl1_no_diffuse_map_fragment\"\n      }\n    ],\n    \"variables\": {\n      \"uniforms\": [\n        {\n          \"name\": \"u_diffuse\",\n          \"field\": \"diffuseColor\",\n          \"type\": \"float3\",\n          \"from\": \"lightMaterial\"\n        }\n      ]\n    }\n  },\n  {\n    \"name\": \"no_specular_map\",\n    \"glsls\": [\n      {\n        \"type\": \"fs\",\n        \"name\": \"webgl1_no_specular_map_fragment\"\n      }\n    ]\n  },\n  {\n    \"name\": \"no_light_map\",\n    \"glsls\": [\n      {\n        \"type\": \"fs\",\n        \"name\": \"webgl1_no_light_map_fragment\"\n      }\n    ]\n  },\n  {\n    \"name\": \"no_emission_map\",\n    \"glsls\": [\n      {\n        \"type\": \"fs\",\n        \"name\": \"webgl1_no_emission_map_fragment\"\n      }\n    ]\n  },\n  {\n    \"name\": \"no_normal_map\",\n    \"glsls\": [\n      {\n        \"type\": \"vs\",\n        \"name\": \"webgl1_no_normal_map_vertex\"\n      },\n      {\n        \"type\": \"fs\",\n        \"name\": \"webgl1_no_normal_map_fragment\"\n      }\n    ]\n  },\n  {\n    \"name\": \"no_shadow_map\",\n    \"glsls\": [\n      {\n        \"type\": \"fs\",\n        \"name\": \"webgl1_no_shadow_map_fragment\"\n      }\n    ]\n  },\n  {\n    \"name\": \"light\",\n    \"glsls\": [\n      {\n        \"type\": \"vs\",\n        \"name\": \"webgl1_frontLight_vertex\"\n      },\n      {\n        \"type\": \"vs_function\",\n        \"name\": \"defineLightCount\"\n      },\n      {\n        \"type\": \"fs\",\n        \"name\": \"webgl1_frontLight_fragment\"\n      },\n      {\n        \"type\": \"fs_function\",\n        \"name\": \"defineLightCount\"\n      }\n    ],\n    \"variables\": {\n      \"uniforms\": [\n        {\n          \"name\": \"u_shininess\",\n          \"from\": \"lightMaterial\",\n          \"field\": \"shininess\",\n          \"type\": \"float\"\n        },\n        {\n          \"name\": \"u_cameraPos\",\n          \"from\": \"camera\",\n          \"field\": \"position\",\n          \"type\": \"vec3\"\n        }\n      ]\n    }\n  },\n  {\n    \"name\": \"ambient_light\",\n    \"glsls\": [\n      {\n        \"type\": \"fs\",\n        \"name\": \"webgl1_ambientLight_fragment\"\n      }\n    ],\n    \"variables\": {\n      \"uniforms\": [\n        {\n          \"name\": \"sendAmbientLight\",\n          \"from\": \"ambientLight\",\n          \"field\": \"send\",\n          \"type\": \"function\"\n        }\n      ]\n    }\n  },\n  {\n    \"name\": \"direction_light\",\n    \"variables\": {\n      \"uniforms\": [\n        {\n          \"name\": \"sendDirectionLight\",\n          \"from\": \"directionLight\",\n          \"field\": \"send\",\n          \"type\": \"function\"\n        }\n      ]\n    }\n  },\n  {\n    \"name\": \"point_light\",\n    \"variables\": {\n      \"uniforms\": [\n        {\n          \"name\": \"sendPointLight\",\n          \"from\": \"pointLight\",\n          \"field\": \"send\",\n          \"type\": \"function\"\n        }\n      ]\n    }\n  },\n  {\n    \"name\": \"light_end\",\n    \"glsls\": [\n      {\n        \"type\": \"fs\",\n        \"name\": \"webgl1_frontLight_end_fragment\"\n      }\n    ]\n  },\n  {\n    \"name\": \"end\",\n    \"variables\": {\n      \"attributes\": [\n        {\n          \"buffer\": 3\n        }\n      ]\n    }\n  }\n]\n\n        ";
  return /* tuple */[
          shaders,
          shaderLibs
        ];
}

function create(param, state) {
  var newrecord = Caml_array.caml_array_dup(state);
  newrecord[/* renderConfigRecord */5] = /* record */[
    /* shaders */ParseRenderConfigService$Wonderjs.convertShadersToRecord(JSON.parse(param[0])),
    /* shaderLibs */ParseRenderConfigService$Wonderjs.convertShaderLibsToRecord(JSON.parse(param[1]))
  ];
  return newrecord;
}

export {
  buildRenderConfig ,
  create ,
  
}
/* No side effect */