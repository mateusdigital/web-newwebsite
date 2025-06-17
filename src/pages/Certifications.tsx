import { DefaultPage } from  '../components/DefaultPage'
import CertificationItemCard from '../components/certifications/CertificationItemCard'

export default function Page() {
  return (
    <>
      {/* <DefaultPage pageId='certifications'>
        <section>
          <h1>MCP</h1>
          <div className='certificationGridContainer'>
            <CertificationItemCard_ index='1' year='2012' provider='MCP' name='2012_06_28_MTA-98-373_Mobile_Development_Fundamentals' display_name='MTA-98-373_Mobile_Development_Fundamentals' img_path='/res/certifications/MCP/2012_06_28_MTA-98-373_Mobile_Development_Fundamentals-1.png' />
            <CertificationItemCard_ index='2' year='2012' provider='MCP' name='2012_05_03_MTA-98-361_Software_Development_Fundamentals' display_name='MTA-98-361_Software_Development_Fundamentals' img_path='/res/certifications/MCP/2012_05_03_MTA-98-361_Software_Development_Fundamentals-1.png' />
          </div>
        </section>

        <section>
          <h1>Bradesco</h1>
          <div className='certificationGridContainer'>
            <CertificationItemCard_ index='3' year='2012' provider='Bradesco' name='2012_11_02_Microsoft_Windows_XP' display_name='Microsoft_Windows_XP' img_path='/res/certifications/Bradesco/2012_11_02_Microsoft_Windows_XP-1.png' />
            <CertificationItemCard_ index='4' year='2014' provider='Bradesco' name='2014_08_20_System_Design_Overview' display_name='System_Design_Overview' img_path='/res/certifications/Bradesco/2014_08_20_System_Design_Overview-1.png' />
            <CertificationItemCard_ index='5' year='2012' provider='Bradesco' name='2012_10_10_Logica_de_Programacao' display_name='Lógica_de_Programação' img_path='/res/certifications/Bradesco/2012_10_10_Logica_de_Programacao-1.png' />
            <CertificationItemCard_ index='6' year='2012' provider='Bradesco' name='2012_10_21_Introducao_ao_Javascript' display_name='Introdução_ao_Javascript' img_path='/res/certifications/Bradesco/2012_10_21_Introducao_ao_Javascript-1.png' />
            <CertificationItemCard_ index='7' year='2014' provider='Bradesco' name='2014_02_14_HTML_Basico' display_name='HTML_Basico' img_path='/res/certifications/Bradesco/2014_02_14_HTML_Basico-1.png' />
            <CertificationItemCard_ index='8' year='2012' provider='Bradesco' name='2012_10_10_Processo_de_Desenvolvimento_de_Software' display_name='Processo_de_Desenvolvimento_de_Software' img_path='/res/certifications/Bradesco/2012_10_10_Processo_de_Desenvolvimento_de_Software-1.png' />
            <CertificationItemCard_ index='9' year='2012' provider='Bradesco' name='2012_10_10_Silverlight' display_name='Silverlight' img_path='/res/certifications/Bradesco/2012_10_10_Silverlight-1.png' />
            <CertificationItemCard_ index='10' year='2012' provider='Bradesco' name='2012_10_19_Programacao_em_C_Sharp' display_name='Programação_em_C_Sharp' img_path='/res/certifications/Bradesco/2012_10_19_Programacao_em_C_Sharp-1.png' />
            <CertificationItemCard_ index='11' year='2015' provider='Bradesco' name='2015_02_26_Seguranca_da_Informacao' display_name='Segurança_da_Informacao' img_path='/res/certifications/Bradesco/2015_02_26_Seguranca_da_Informacao-1.png' />
            <CertificationItemCard_ index='12' year='2012' provider='Bradesco' name='2012_10_21_C_plus__plus__Desenvolvimento_Orientado_a_Objeto' display_name='C++_Desenvolvimento_Orientado_a_Objeto' img_path='/res/certifications/Bradesco/2012_10_21_C_plus__plus__Desenvolvimento_Orientado_a_Objeto-1.png' />
            <CertificationItemCard_ index='13' year='2012' provider='Bradesco' name='2012_10_10_Expression_Blend' display_name='Expression_Blend' img_path='/res/certifications/Bradesco/2012_10_10_Expression_Blend-1.png' />
            <CertificationItemCard_ index='14' year='2014' provider='Bradesco' name='2014_08_15_Engenharia_de_Requisitos' display_name='Engenharia_de_Requisitos' img_path='/res/certifications/Bradesco/2014_08_15_Engenharia_de_Requisitos-1.png' />
            <CertificationItemCard_ index='15' year='2012' provider='Bradesco' name='2012_10_16_Aplicacoes_Windows_Mobile' display_name='Aplicações_Windows_Mobile' img_path='/res/certifications/Bradesco/2012_10_16_Aplicacoes_Windows_Mobile-1.png' />
          </div>
        </section>

        <section>
          <h1>MVA</h1>
          <div className='certificationGridContainer'>
            <CertificationItemCard_ index='16' year='2012' provider='MVA' name='2012_10_10_Internet_Explorer_9' display_name='Internet_Explorer_9' img_path='/res/certifications/MVA/2012_10_10_Internet_Explorer_9-1.png' />
            <CertificationItemCard_ index='17' year='2012' provider='MVA' name='2012_10_10_Windows_Intune' display_name='Windows_Intune' img_path='/res/certifications/MVA/2012_10_10_Windows_Intune-1.png' />
            <CertificationItemCard_ index='18' year='2014' provider='MVA' name='2014_08_13_MVA_Live_Q_and_A_Microsoft_Virtualization' display_name='MVA_Live_Q&A_Microsoft_Virtualization' img_path='/res/certifications/MVA/2014_08_13_MVA_Live_Q_and_A_Microsoft_Virtualization-1.png' />
            <CertificationItemCard_ index='19' year='2013' provider='MVA' name='2013_06_27_Organizing__and__Sharing_with_OneNote_Jump_Start' display_name='Organizing_&_Sharing_with_OneNote_Jump_Start' img_path='/res/certifications/MVA/2013_06_27_Organizing__and__Sharing_with_OneNote_Jump_Start-1.png' />
            <CertificationItemCard_ index='20' year='2012' provider='MVA' name='2012_08_22_Windows_Phone_7' display_name='Windows_Phone_7' img_path='/res/certifications/MVA/2012_08_22_Windows_Phone_7-1.png' />
            <CertificationItemCard_ index='21' year='2014' provider='MVA' name='2014_08_15_JavaScript_Fundamentals_for_Absolute_Beginners' display_name='JavaScript_Fundamentals_for_Absolute_Beginners' img_path='/res/certifications/MVA/2014_08_15_JavaScript_Fundamentals_for_Absolute_Beginners-1.png' />
            <CertificationItemCard_ index='22' year='2012' provider='MVA' name='2012_07_09_Entendendo_o_Windows_Azure' display_name='Entendendo_o_Windows_Azure' img_path='/res/certifications/MVA/2012_07_09_Entendendo_o_Windows_Azure-1.png' />
            <CertificationItemCard_ index='23' year='2012' provider='MVA' name='2012_03_15_Introducao_ao_Office_365' display_name='Introdução_ao_Office_365' img_path='/res/certifications/MVA/2012_03_15_Introducao_ao_Office_365-1.png' />
            <CertificationItemCard_ index='24' year='2012' provider='MVA' name='2012_08_13_HTML5_-_Homologado_pelo_W3C' display_name='HTML5_-_Homologado_pelo_W3C' img_path='/res/certifications/MVA/2012_08_13_HTML5_-_Homologado_pelo_W3C-1.png' />
            <CertificationItemCard_ index='25' year='2012' provider='MVA' name='2012_10_23_Windows_8_-_Sua_primeira_App_na_Windows_Store' display_name='Windows_8_-_Sua_primeira_App_na_Windows_Store' img_path='/res/certifications/MVA/2012_10_23_Windows_8_-_Sua_primeira_App_na_Windows_Store-1.png' />
            <CertificationItemCard_ index='26' year='2012' provider='MVA' name='2012_08_22_Conceptos_de_desarrollo_en_XNA_con_Visual_Studio' display_name='Conceptos_de_desarrollo_en_XNA_con_Visual_Studio' img_path='/res/certifications/MVA/2012_08_22_Conceptos_de_desarrollo_en_XNA_con_Visual_Studio-1.png' />
            <CertificationItemCard_ index='27' year='2015' provider='MVA' name='2015_11_22_Twenty_C_sharp__Questions_Answered' display_name='Twenty_C#_Questions_Answered' img_path='/res/certifications/MVA/2015_11_22_Twenty_C_sharp__Questions_Answered-1.png' />
            <CertificationItemCard_ index='28' year='2013' provider='MVA' name='2013_03_19_Build_Apps_for_Both_Windows_8_and_Windows_Phone_8_Jump_Start' display_name='Build_Apps_for_Both_Windows_8_and_Windows_Phone_8_Jump_Start' img_path='/res/certifications/MVA/2013_03_19_Build_Apps_for_Both_Windows_8_and_Windows_Phone_8_Jump_Start-1.png' />
            <CertificationItemCard_ index='29' year='2012' provider='MVA' name='2012_01_22_Entendendo_desenvolvimento_para_o_Windows_Phone_7' display_name='Entendendo_desenvolvimento_para_o_Windows_Phone_7' img_path='/res/certifications/MVA/2012_01_22_Entendendo_desenvolvimento_para_o_Windows_Phone_7-1.png' />
            <CertificationItemCard_ index='30' year='2012' provider='MVA' name='2012_05_30_Introducao_ao_SQL_Server_2008_R2' display_name='Introdução_ao_SQL_Server_2008_R2' img_path='/res/certifications/MVA/2012_05_30_Introducao_ao_SQL_Server_2008_R2-1.png' />
            <CertificationItemCard_ index='31' year='2015' provider='MVA' name='2015_02_28_Game_Production_Basics' display_name='Game_Production_Basics' img_path='/res/certifications/MVA/2015_02_28_Game_Production_Basics-1.png' />
            <CertificationItemCard_ index='32' year='2015' provider='MVA' name='2015_11_22_Introduction_to_Programming_with_Python' display_name='Introduction_to_Programming_with_Python' img_path='/res/certifications/MVA/2015_11_22_Introduction_to_Programming_with_Python-1.png' />
            <CertificationItemCard_ index='33' year='2012' provider='MVA' name='2012_03_17_Windows_Phone_7_Game_Programming' display_name='Windows_Phone_7_Game_Programming' img_path='/res/certifications/MVA/2012_03_17_Windows_Phone_7_Game_Programming-1.png' />
            <CertificationItemCard_ index='34' year='2014' provider='MVA' name='2014_09_28_Understanding_Active_Directory' display_name='Understanding_Active_Directory' img_path='/res/certifications/MVA/2014_09_28_Understanding_Active_Directory-1.png' />
            <CertificationItemCard_ index='35' year='2014' provider='MVA' name='2014_03_08_C_sharp__Fundamentals_Development_for_Absolute_Beginners' display_name='C#_Fundamentals_Development_for_Absolute_Beginners' img_path='/res/certifications/MVA/2014_03_08_C_sharp__Fundamentals_Development_for_Absolute_Beginners-1.png' />
            <CertificationItemCard_ index='36' year='2014' provider='MVA' name='2014_08_18_C_plus__plus__A_General_Purpose_Language_and_Library_Jump_Start' display_name='C++_A_General_Purpose_Language_and_Library_Jump_Start' img_path='/res/certifications/MVA/2014_08_18_C_plus__plus__A_General_Purpose_Language_and_Library_Jump_Start-1.png' />
            <CertificationItemCard_ index='37' year='2012' provider='MVA' name='2012_10_09_Introduction_To_Windows_Azure_Training' display_name='Introduction_To_Windows_Azure_Training' img_path='/res/certifications/MVA/2012_10_09_Introduction_To_Windows_Azure_Training-1.png' />
            <CertificationItemCard_ index='38' year='2012' provider='MVA' name='2012_10_05_Microsoft_Licensing_Fundamentals_OLD' display_name='Microsoft_Licensing_Fundamentals_OLD' img_path='/res/certifications/MVA/2012_10_05_Microsoft_Licensing_Fundamentals_OLD-1.png' />
            <CertificationItemCard_ index='39' year='2013' provider='MVA' name='2013_03_20_Building_Apps_for_Windows_Phone_8_Jump_Start' display_name='Building_Apps_for_Windows_Phone_8_Jump_Start' img_path='/res/certifications/MVA/2013_03_20_Building_Apps_for_Windows_Phone_8_Jump_Start-1.png' />
            <CertificationItemCard_ index='40' year='2012' provider='MVA' name='2012_05_30_Fundamentos_do_desenvolvimento_de_software' display_name='Fundamentos_do_desenvolvimento_de_software' img_path='/res/certifications/MVA/2012_05_30_Fundamentos_do_desenvolvimento_de_software-1.png' />
            <CertificationItemCard_ index='41' year='2012' provider='MVA' name='2012_08_10_Introducao_ao_desenvolvimento_para_Windows_8' display_name='Introdução_ao_desenvolvimento_para_Windows_8' img_path='/res/certifications/MVA/2012_08_10_Introducao_ao_desenvolvimento_para_Windows_8-1.png' />
            <CertificationItemCard_ index='42' year='2012' provider='MVA' name='2012_03_14_Introducao_à_Business_Intelligence' display_name='Introdução_à_Business_Intelligence' img_path='/res/certifications/MVA/2012_03_14_Introducao_à_Business_Intelligence-1.png' />
            <CertificationItemCard_ index='43' year='2014' provider='MVA' name='2014_02_17_Gaming_Engines_for_Windows_8_Jump_Start' display_name='Gaming_Engines_for_Windows_8_Jump_Start' img_path='/res/certifications/MVA/2014_02_17_Gaming_Engines_for_Windows_8_Jump_Start-1.png' />
            <CertificationItemCard_ index='44' year='2014' provider='MVA' name='2014_08_13_MVA_Live_Q_and_A_System_Center_2012' display_name='MVA_Live_Q&A_System_Center_2012' img_path='/res/certifications/MVA/2014_08_13_MVA_Live_Q_and_A_System_Center_2012-1.png' />
            <CertificationItemCard_ index='45' year='2013' provider='MVA' name='2013_06_27_MVA_Live_Q_and_A_Programming_Windows_with_Charles_Petzold' display_name='MVA_Live_Q&A_Programming_Windows_with_Charles_Petzold' img_path='/res/certifications/MVA/2013_06_27_MVA_Live_Q_and_A_Programming_Windows_with_Charles_Petzold-1.png' />
            <CertificationItemCard_ index='46' year='2015' provider='MVA' name='2015_11_18_Open_Source_Questions_Answered' display_name='Open_Source_Questions_Answered' img_path='/res/certifications/MVA/2015_11_18_Open_Source_Questions_Answered-1.png' />
            <CertificationItemCard_ index='47' year='2017' provider='MVA' name='2017_08_25_Getting_Started_with_Visual_Studio_2017' display_name='Getting_Started_with_Visual_Studio_2017' img_path='/res/certifications/MVA/2017_08_25_Getting_Started_with_Visual_Studio_2017-1.png' />
            <CertificationItemCard_ index='48' year='2014' provider='MVA' name='2014_10_26_Networking_Fundamentals' display_name='Networking_Fundamentals' img_path='/res/certifications/MVA/2014_10_26_Networking_Fundamentals-1.png' />
            <CertificationItemCard_ index='49' year='2012' provider='MVA' name='2012_10_09_Desarrollo_basado_en_conceptos_de_Ingeniería_de_Software_para_Visual_Studio' display_name='Desarrollo_basado_en_conceptos_de_Ingeniería_de_Software_para_Visual_Studio' img_path='/res/certifications/MVA/2012_10_09_Desarrollo_basado_en_conceptos_de_Ingeniería_de_Software_para_Visual_Studio-1.png' />
            <CertificationItemCard_ index='50' year='2014' provider='MVA' name='2014_08_13_MVA_Live_Q_and_A_Windows_Azure' display_name='MVA_Live_Q&A_Windows_Azure' img_path='/res/certifications/MVA/2014_08_13_MVA_Live_Q_and_A_Windows_Azure-1.png' />
            <CertificationItemCard_ index='51' year='2012' provider='MVA' name='2012_10_25_Desarrollando_en_Windows_8' display_name='Desarrollando_en_Windows_8' img_path='/res/certifications/MVA/2012_10_25_Desarrollando_en_Windows_8-1.png' />
            <CertificationItemCard_ index='52' year='2012' provider='MVA' name='2012_10_07_Windows_Azure' display_name='Windows_Azure' img_path='/res/certifications/MVA/2012_10_07_Windows_Azure-1.png' />
            <CertificationItemCard_ index='53' year='2013' provider='MVA' name='2013_06_27_Windows_8_UX_Design_Jump_Start' display_name='Windows_8_UX_Design_Jump_Start' img_path='/res/certifications/MVA/2013_06_27_Windows_8_UX_Design_Jump_Start-1.png' />
            <CertificationItemCard_ index='54' year='2012' provider='MVA' name='2012_08_05_Fundamentos_do_Entity_Framework_4' display_name='Fundamentos_do_Entity_Framework_4' img_path='/res/certifications/MVA/2012_08_05_Fundamentos_do_Entity_Framework_4-1.png' />
            <CertificationItemCard_ index='55' year='2013' provider='MVA' name='2013_06_27_Programming_in_C_sharp__Jump_Start' display_name='Programming_in_C#_Jump_Start' img_path='/res/certifications/MVA/2013_06_27_Programming_in_C_sharp__Jump_Start-1.png' />
            <CertificationItemCard_ index='56' year='2012' provider='MVA' name='2012_10_10_Sites_Fixos_com_Internet_Explorer_9' display_name='Sites_Fixos_com_Internet_Explorer_9' img_path='/res/certifications/MVA/2012_10_10_Sites_Fixos_com_Internet_Explorer_9-1.png' />
            <CertificationItemCard_ index='57' year='2012' provider='MVA' name='2012_10_07_Microsoft_Silverlight' display_name='Microsoft_Silverlight' img_path='/res/certifications/MVA/2012_10_07_Microsoft_Silverlight-1.png' />
            <CertificationItemCard_ index='58' year='2014' provider='MVA' name='2014_03_08_Windows_8.1_UX_Design_Jump_Start' display_name='Windows_8.1_UX_Design_Jump_Start' img_path='/res/certifications/MVA/2014_03_08_Windows_8.1_UX_Design_Jump_Start-1.png' />
            <CertificationItemCard_ index='59' year='2014' provider='MVA' name='2014_02_24_Software_Development_Fundamentals' display_name='Software_Development_Fundamentals' img_path='/res/certifications/MVA/2014_02_24_Software_Development_Fundamentals-1.png' />
            <CertificationItemCard_ index='60' year='2012' provider='MVA' name='2012_10_10_Office_365' display_name='Office_365' img_path='/res/certifications/MVA/2012_10_10_Office_365-1.png' />
            <CertificationItemCard_ index='61' year='2013' provider='MVA' name='2013_06_27_Essentials_of_Developing_Windows_Store_Apps_using_C_sharp__Jump_Start' display_name='Essentials_of_Developing_Windows_Store_Apps_using_C#_Jump_Start' img_path='/res/certifications/MVA/2013_06_27_Essentials_of_Developing_Windows_Store_Apps_using_C_sharp__Jump_Start-1.png' />
            <CertificationItemCard_ index='62' year='2012' provider='MVA' name='2012_10_05_Windows_8_-_Vista_Previa_' display_name='Windows_8_-_Vista_Previa_' img_path='/res/certifications/MVA/2012_10_05_Windows_8_-_Vista_Previa_-1.png' />
          </div>
        </section>

        <section>
          <h1>iPed</h1>
          <div className='certificationGridContainer'>
            <CertificationItemCard_ index='63' year='2015' provider='iPed' name='2015_03_04_Curso_de_Linux' display_name='Curso_de_Linux' img_path='/res/certifications/iPed/2015_03_04_Curso_de_Linux-1.png' />
          </div>
        </section>

        <section>
          <h1>Intel</h1>
          <div className='certificationGridContainer'>
            <CertificationItemCard_ index='64' year='2010' provider='Intel' name='2010_01_01_Curso_de_CRM' display_name='Curso_de_CRM' img_path='/res/certifications/Intel/2010_01_01_Curso_de_CRM-1.png' />
            <CertificationItemCard_ index='65' year='2009' provider='Intel' name='2009_06_01_Conectividade_Sem_Fio' display_name='Conectividade_Sem_Fio' img_path='/res/certifications/Intel/2009_06_01_Conectividade_Sem_Fio-1.png' />
            <CertificationItemCard_ index='66' year='2009' provider='Intel' name='2009_06_01_Economia_de_Energia' display_name='Economia_de_Energia' img_path='/res/certifications/Intel/2009_06_01_Economia_de_Energia-1.png' />
            <CertificationItemCard_ index='67' year='2009' provider='Intel' name='2009_06_01_Cloud_Computing' display_name='Cloud_Computing' img_path='/res/certifications/Intel/2009_06_01_Cloud_Computing-1.png' />
            <CertificationItemCard_ index='68' year='2009' provider='Intel' name='2009_06_01_TI_Socialmente_Responsavel' display_name='TI_Socialmente_Responsavel' img_path='/res/certifications/Intel/2009_06_01_TI_Socialmente_Responsavel-1.png' />
            <CertificationItemCard_ index='69' year='2009' provider='Intel' name='2009_06_01_Grid_Computing' display_name='Grid_Computing' img_path='/res/certifications/Intel/2009_06_01_Grid_Computing-1.png' />
            <CertificationItemCard_ index='70' year='2009' provider='Intel' name='2009_06_01_Software_Livre' display_name='Software_Livre' img_path='/res/certifications/Intel/2009_06_01_Software_Livre-1.png' />
            <CertificationItemCard_ index='71' year='2010' provider='Intel' name='2010_01_01_Verticalizacao' display_name='Verticalização' img_path='/res/certifications/Intel/2010_01_01_Verticalizacao-1.png' />
            <CertificationItemCard_ index='72' year='2009' provider='Intel' name='2009_06_01_Missao_Critica' display_name='Missão_Critica' img_path='/res/certifications/Intel/2009_06_01_Missao_Critica-1.png' />
          </div>
        </section>

        <section>
          <h1>GoLearny</h1>
          <div className='certificationGridContainer'>
            <CertificationItemCard_ index='73' year='2016' provider='GoLearny' name='2016_02_14_Fundamentos_de_Sistemas_Linux' display_name='Fundamentos_de_Sistemas_Linux' img_path='/res/certifications/GoLearny/2016_02_14_Fundamentos_de_Sistemas_Linux-1.png' />
            <CertificationItemCard_ index='74' year='2016' provider='GoLearny' name='2016_01_25_GNU_Linux_Ubuntu_Desktop_Basico' display_name='GNU_Linux_Ubuntu_Desktop_Básico' img_path='/res/certifications/GoLearny/2016_01_25_GNU_Linux_Ubuntu_Desktop_Basico-1.png' />
          </div>
        </section>

        <section>
          <h1>GXBrazil</h1>
          <div className='certificationGridContainer'>
            <CertificationItemCard_ index='75' year='2016' provider='GXBrazil' name='2016_03_20_GX_Brazil' display_name='GX_Brazil' img_path='/res/certifications/GXBrazil/2016_03_20_GX_Brazil-1.png' />
          </div>
        </section>

        <section>
          <h1>Coursera</h1>
          <div className='certificationGridContainer'>
            <CertificationItemCard_ index='76' year='2015' provider='Coursera' name='2015_03_23_Welcome_to_Game_Theory' display_name='Welcome_to_Game_Theory' img_path='/res/certifications/Coursera/2015_03_23_Welcome_to_Game_Theory-1.png' />
            <CertificationItemCard_ index='77' year='2014' provider='Coursera' name='2014_04_23_Exploring_Beethovens_Piano_Sonatas' display_name='Exploring_Beethovens_Piano_Sonatas' img_path='/res/certifications/Coursera/2014_04_23_Exploring_Beethovens_Piano_Sonatas-1.png' />
          </div>
        </section>

        <section>
          <h1>Tux4You</h1>
          <div className='certificationGridContainer'>
            <CertificationItemCard_ index='78' year='2015' provider='Tux4You' name='2015_02_19_Adminstracao_Ubuntu_Gnu_Linux' display_name='Adminstração_Ubuntu_Gnu:Linux' img_path='/res/certifications/Tux4You/2015_02_19_Adminstracao_Ubuntu_Gnu_Linux-1.png' />
          </div>
        </section>

        <section>
          <h1>udemy</h1>
          <div className='certificationGridContainer'>
            <CertificationItemCard_ index='79' year='2015' provider='udemy' name='2015_02_19_Aprendendo_Terminal_Linux_pondo_a_mao_na_massa_' display_name='Aprendendo_Terminal_Linux_pondo_a_mão_na_massa!' img_path='/res/certifications/udemy/2015_02_19_Aprendendo_Terminal_Linux_pondo_a_mao_na_massa_-1.png' />
            <CertificationItemCard_ index='80' year='2015' provider='udemy' name='2015_06_21_Git_Started_with_GitHub' display_name='Git_Started_with_GitHub' img_path='/res/certifications/udemy/2015_06_21_Git_Started_with_GitHub-1.png' />
            <CertificationItemCard_ index='81' year='2016' provider='udemy' name='2016_02_24_SpriteKit_-_Learn_Apples_First_Ever_Game_Engine_in_iOS' display_name='SpriteKit_-_Learn_Apples_First_Ever_Game_Engine_in_iOS' img_path='/res/certifications/udemy/2016_02_24_SpriteKit_-_Learn_Apples_First_Ever_Game_Engine_in_iOS-1.png' />
            <CertificationItemCard_ index='82' year='2016' provider='udemy' name='2016_01_03_Learn_Socket_Programming_in_C_from_Scratch' display_name='Learn_Socket_Programming_in_C_from_Scratch' img_path='/res/certifications/udemy/2016_01_03_Learn_Socket_Programming_in_C_from_Scratch-1.png' />
            <CertificationItemCard_ index='83' year='2016' provider='udemy' name='2016_01_04_Game_Developers__5_Quick_Legal_Tips_for_Your_Indie_Studio' display_name='Game_Developers:_5_Quick_Legal_Tips_for_Your_Indie_Studio' img_path='/res/certifications/udemy/2016_01_04_Game_Developers__5_Quick_Legal_Tips_for_Your_Indie_Studio-1.png' />
            <CertificationItemCard_ index='84' year='2015' provider='udemy' name='2015_02_25_Introduction_to_SpriteKit_with_iOS7_and_Xcode_5' display_name='Introduction_to_SpriteKit_with_iOS7_and_Xcode_5' img_path='/res/certifications/udemy/2015_02_25_Introduction_to_SpriteKit_with_iOS7_and_Xcode_5-1.png' />
            <CertificationItemCard_ index='85' year='2015' provider='udemy' name='2015_02_19_Certified_C_Coder_-_Lite_Edition' display_name='Certified_C_Coder_-_Lite_Edition' img_path='/res/certifications/udemy/2015_02_19_Certified_C_Coder_-_Lite_Edition-1.png' />
            <CertificationItemCard_ index='86' year='2016' provider='udemy' name='2016_01_28_Introduction_to_Python_Programming' display_name='Introduction_to_Python_Programming' img_path='/res/certifications/udemy/2016_01_28_Introduction_to_Python_Programming-1.png' />
            <CertificationItemCard_ index='87' year='2016' provider='udemy' name='2016_01_18_SQLite_Programming_on_iPhone_for_Beginners' display_name='SQLite_Programming_on_iPhone_for_Beginners' img_path='/res/certifications/udemy/2016_01_18_SQLite_Programming_on_iPhone_for_Beginners-1.png' />
            <CertificationItemCard_ index='88' year='2016' provider='udemy' name='2016_01_08_Learn_Objective_C_Programming_for_iOS_Apps' display_name='Learn_Objective_C_Programming_for_iOS_Apps' img_path='/res/certifications/udemy/2016_01_08_Learn_Objective_C_Programming_for_iOS_Apps-1.png' />
            <CertificationItemCard_ index='89' year='2015' provider='udemy' name='2015_02_27_Introduction_of_PHP_Programming_Language' display_name='Introduction_of_PHP_Programming_Language' img_path='/res/certifications/udemy/2015_02_27_Introduction_of_PHP_Programming_Language-1.png' />
            <CertificationItemCard_ index='90' year='2016' provider='udemy' name='2016_02_15_Learn_Bash_Shell_in_Linux_For_Beginners' display_name='Learn_Bash_Shell_in_Linux_For_Beginners' img_path='/res/certifications/udemy/2016_02_15_Learn_Bash_Shell_in_Linux_For_Beginners-1.png' />
            <CertificationItemCard_ index='91' year='2015' provider='udemy' name='2015_03_03_Introduction_to_Linux_CentOS_7' display_name='Introduction_to_Linux_CentOS_7' img_path='/res/certifications/udemy/2015_03_03_Introduction_to_Linux_CentOS_7-1.png' />
            <CertificationItemCard_ index='92' year='2016' provider='udemy' name='2016_01_18_Introductory_Course_on_WatchOS_Apps_with_Swift2_in_Xcode7' display_name='Introductory_Course_on_WatchOS_Apps_with_Swift2_in_Xcode7' img_path='/res/certifications/udemy/2016_01_18_Introductory_Course_on_WatchOS_Apps_with_Swift2_in_Xcode7-1.png' />
            <CertificationItemCard_ index='93' year='2015' provider='udemy' name='2015_06_17_Basic_of_Bash_Scripting' display_name='Basic_of_Bash_Scripting' img_path='/res/certifications/udemy/2015_06_17_Basic_of_Bash_Scripting-1.png' />
            <CertificationItemCard_ index='94' year='2015' provider='udemy' name='2015_02_28_Linux_Alternatives_to_Windows_Applications' display_name='Linux_Alternatives_to_Windows_Applications' img_path='/res/certifications/udemy/2015_02_28_Linux_Alternatives_to_Windows_Applications-1.png' />
            <CertificationItemCard_ index='95' year='2016' provider='udemy' name='2016_01_09_Jailbreaking_Strategies_and_Secrets_for_iOS8_and_Others' display_name='Jailbreaking_Strategies_and_Secrets_for_iOS8_and_Others' img_path='/res/certifications/udemy/2016_01_09_Jailbreaking_Strategies_and_Secrets_for_iOS8_and_Others-1.png' />
          </div>
        </section>

      </DefaultPage> */}
    </>
  );
}
