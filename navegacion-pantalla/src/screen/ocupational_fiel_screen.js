import React from 'react';
import { Text, View, StyleSheet, FlatList, Image} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';


const OcupationalFielScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea} >
            <View style={styles.container}>
                <Text style={styles.title}>Campo ocupacional:</Text>
                <Text style={styles.description}>Desarrollamos los mejores profesionales es por ello que nuestros estudiantes pueden ocupar:</Text>
                <FlatList
                    data={[
                        { key: 'Cargos Administrativos en TIC' },
                        { key: 'Directores de TIC' },
                        { key: 'Emprendimientos en nuevas tecnologías' },
                        { key: 'Exterior empresas mundiales' },
                        { key: 'Empresas Publicas' },
                        { key: 'Empresas Administrativas' },
                        { key: 'y más.. ' },
                    ]}
                    renderItem={({ item }) => <Text style={styles.itemText}>{item.key}</Text>}
                />
                  <Image
                    style={styles.logo}
                    source={{
                        uri: 
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAA/1BMVEX5+fn////29vb6+vr///3z8/Pu7u7//v/w8PDm5ubs7Oz//v3p6enl5eX///v8//8qsv7Z2dnf39/Y2NixsbHy//8hISEqsf/Ozs68vLxCQkIcHByUlJTw///Hx8dTU1NcXFxLS0tsbGw3NzczMzOcnJypqal5eXkqs/vb+P6FhYUcqfcoKChERESb2fc+r+615fbW9Px0xe/H7/xEtPIjqfBlZWWl3fR4xu+Jze9hvfBgwfFVvPVJtvam3vuu5PjK6vVtyO6o4/IcHhcfGB2T3faOnKDi//9CmMZndXyI0vFJpd9HsOcNDQ1OwPbI9/0ohraZ0fS1zNZdk6+45u93NNxiAAAX7ElEQVR4nO1dCXvbRpJlE81LTaIpSjBIjUAdlGRQkHjDPGXZmZnlrlaTbHby/3/LvqoGQNByPJv5PpuMhOdEFyibeF9V9aujG7lchgwZMmTIkCFDhgwZMmTIkCFDhgwZMmTIkCFDhgwZMmTIkCFDhgwZvh/yG+z6rew/8lvY9bvZZ+Rf4l+86Me/x73BV8h6Qce/JPMtgG47IqBA+Aof+a+b3htkLCarkEKarhQ/29ffKFkxEWWDDV18/Quitujc9Zv/wdhwUU4hsZ5ciqroQprOXb/7H4w0V8UYW+ZVKBS+oNKwli+8ZbLA0gGD+WIqrFy+QMQwP8UNiKtdv/Md4AuuqgDoKltaCCm0UFKU8ls8gctCroSLpZJSoqS1lcN/bwOxZREhhqtqtSy0lCALhAmp8KFUKBcPjN1Vizn6MXjSmj7ZWpfeClfxUmgMq1qtVGpVS6uSHk5ny9VqMeqNPaFsmFeRaKwc5LS0legO5qPF6ufRfNAVwia63gZhKcNirspwPW86CQIXqLtuEC6nng2C8pUKeJS2HD6tQr7q1uu4OsaPxNvgaousSq1WEEoMnoM6QGTQJzDyNIR1iRxZ0WARRhcYfj1cduGzb4ctJuuA7KqgS3oeEkVBOFmtHvohG1A9nHXBotSDVQD2iL/+arWahIGPq/2xLd9I4EqRVTsQSs8DMpfZYO0I7Xjj6SL0YWRu+OSp4TIkqsLJbND1HK2d7scVmHXDAdx01/fxQxCTRREL/tQju1oMNaSBsBGrlO72+mxqkydc8t1w8egp20akwiuU8xgSfUMp1K5v5EeAyGLDqtbywh6DkPDJURAPsBbQAa1le9N+EMWwYDHWCF+4AOGAyK7s7jMYnHj2m1BbCVm1olIO3flnLZUqkYiyYWD4YNvek8/xfDLANyCyVNKS1JgU0l73637QU1K+AbY2ZFlCTWE9K6ek7RJbValE3mZr5cxdszIObIGLEspLaEUxX2kFa/RDz1bWq0+B8hs3FMJBdArHqmQLEu4E2A7o8JaI8vWQIn9PlxTJVCQ8wih8KeegEab1+mP8hiyKWJACI6QwkmOSMLFJqu7Edf36aAx/qwdzTURS4hixqe0uAt3EeQNiyyyGxWK1YgkBEwnGSiPfMWQhxgtbgCuKStpeL0i0zxxkhpFh4ZPUSs1A4if8cNc3850RCXgY1oEQul93nx22KDtyQ430pg/l2R8g5tsOCVZ/5NhYLY2jwkfhqGMslk/i1ZOVSyRpQYgu7nlOZRkpRWI4Q3K+/lhROLd1D7IqWDgSy6RIwpr0EOtW+lWTRSEm9sKDSl6oQeCHj+R9NhVgpCpBSXWZqyGWvxIYtGUvAFsjrIglegF+imXRFgvX7XsUtKzXHLc2uQ6Ew5NbD7twL82hHaaj1ZqEF7git6QrSkxJKMypMEPJotQQXEo8IR/qMlm52OBeH22GK1ZZuL8RyPKgRuFYSKgRlmxvQUq0KxzPQMOKppARQU+SW3Lkklg9B0E9GHDQEq1TwnXr4I8ujntOblJRpooD7h2L3YODNIeSPmSFwll/rkMzPKxWE9/v448/Wa2Wnx+oDAF3VSQbELwQ7RHhg4+GrNP7W+DypHPzx0qCYr8l7ab6DrKqWNhWLoVpSQ6n1+Pe6JlLV1QCxAe/nobf/9wbr7UpMEs1xMtisi7ZC3PXd8fiD7Al3h/v8/qQ5orIkg7IWhJT3m+zVRhyLdTnAp8bI2KKNCoVUVfz3zxeM7GOur2ELPzlliVOTwp/wLLE2d6StelTmEynUqso6Uzq7kJ0p8sgABnGlPwgDPurxXI0ms1mo9FyNemHYRjXUYmwxbSrbS9wQZaUuVzJkAW2andHlvnKQrTf8GalY7/FoB+eH+9pBpB0TyOzqtUaFWE7D4hZozCqJge+D74W47WjtdhAO+vueMBVL+OgdapwDUPEfCFLOVtGZOWsg06bb1/km612LWLCEkV8V4x5EVaj3WqWrXyxcH5TKFd3xMe3kGpCH3A1udY4wDqnV3Wf/1BNefTTEnT019SroL6XjgUoVSKUeqQK6WoCZn0fAn/i+rAsrTeWlYssyxLHJxeX51fv2Setw8vO+eXZ1Y15jWhfnHy4vLhrNu9O7u87nbvivhlXPi6OGqpqlVqjlpNKrqlmhZt2w+Xfh44ag4hwjNVOI4grZTS9kvx1Sck5Ithq3Z0uwiCKYz2I2ZIWMVkgKY/1UFyfNJF11s4/sPd1Tqv4a1rv2hT8xXWnlUegax7mD8iyigc7puYFkmAVNb/AFdJC25n2edELV4hBMKZ1H9T1jDSQ0rYl61RJwoo6q7YHMwzm+HL905JeCgk/61LtFGRZRFLjiiK21b5q0Cer2GmBn/yR8czbDyzJ6BpZn5U3MWvv7CrtgcYF88IWw4kxkHAAQ0KaQwUIdwFpCpGeZIGmFqH4PzEMTe0L9HV/hS/SL/ccW1xfavwTjeu7a7IwcU6f2MI+EE9Ge1nNqwIYAn8RPbCy871bDfNbesFwZcGsELBJD7h+uEa6rJSpxQ/Ft9CDkn/2JEutqOocTMZwrb/99W/vTk4brCBqd1VeCy3RvDOrJKkKUUN0Eu1OSoftH1nJ1FrEVQ1AvKakhsp6f8f9DqjooDxILv+jrb7Ble0s4LU9hQRIihmY7nO8m/7Hh3K11rq/5VsX7ZOjQ4PWXZnjvVVrHp9+uCpDiL1P0bN3ZL0MV7WaBS+akAxYjNUnCNEpvE0pqi0sHPsbXCFyDbEE9Lu0BLD2X3PH0f/P/6JEvHHXYi887lxEOLuowtmqtycn5++vj8my3p/uMVnbXFUNV0J1+xBL4a+O0l5Yd2e04nXZCb/JFTHyBJJHsmQrD7SNhByuyEL/26NfvL6nf1Icn23GUsHVUef0sICrFZjZ3pNV2AzMMFlYuLt90pWP1MbRD4hCDgL6DPc8V1p9yw2FLnkTjvFSfgr8oIc105txi9bD7xXYtKw26YcNzq5ZzFuNuz13w1Rsj7k6UIoSwnp/aGrqszoVtBT8y+97UFMRKzaXRSUNrymZEGhrOcUSugLNU4SrT/grbE3VrmCpFfTWGbFSuWtE0t3icF8zGRAFMNE6yW0KE/tFVtoJ44gFhhBoYB3R/U/dejCQegnDmkIz2FFwIs0gqZ9js/eZH5fwh5imXxhR45BLq2IApw6f8JrKHbIdyKfbZBG0YFAVJkdQgLcK71rxtT0j68U4JM3MCEVqKRjbkT4fBnV3zu2HiWOIoZ9KLgcyaWRdUU9RQrpCYfjuSnt9+mjEqv2IVSIc4/Xvz6ly2mTOwNphE/R0SHlCc73vYGkUN1eH5loeZF2eCmtfUum0aogMq2ILtYQT9sxEJO7fQYSf6KXrBgOl46YFGZHW3LBQUicKFQ4Jfb/w8dph4Lsk5skUS4rC/gpcH/61TRZzc3faKB40b++aRM/d8UH58P1l9R3pCHF7dVMrVpuXdKnVaVZbf6So8x2RIstkz5VaWbEMf3biMKShl+rhTxCbEwcuFXdwqIKsnHFv/nHo2FInzWr6Qxnk4gnOOIaWhWFR7XRBhVRotNtTshTRvOycnJydVrhAf3zRObm4EdXzMpduWh/o2jUrsGt8tb9kmRZF8GjHHVMtH12uOtQfVYknGiJaSnL8zINYM4/6YZG9UaYjF5xE1/se7Mym7FHDN13ySmFaY9DrxWoxLmIJq3pA3iaiSCXKdI3focjvS80hteUkGrWtVRDCH7ASenJjQmuixPTiN06IBHEcRvnMiudLN5DjgMh1RzJhXFAtPxwqO7n1dOlv+5utb/cmj86n2eIAXysKiMl6fUmz7tGd29IkPlN7q94nnOe49h48iU17lcP8iouFj3bkntQgGwRUsPnzDorkU2xFIb4AyV2nppZWpdgq7EcqPvS9LTWq1GDTrQgdkb5Ysgc0Zdr3EufEZdinO8JXu77pfxebbXBmvwQsC8LhU1gPPpIDJWqAGvHukyqlUx0l5sl8sh8MZdrqpKIxJXemRPJTZAAPCFpw331xq38H6S1NPBQpQFb9oyjFKgERXU9cP/jJ1mmyZIosMy2zAfQC1IfbS4xTUh0VOWIffwWVsX6fsL1RVV/HVkenVlASysF9kqw7oxslLVEf6XRYgmX1opn3et3091NkSfI5dwFJGklYkCUnbn1CZFkHx7/bOsW1PREKv4d0WxVuCKdzF1IkolyoHvVrQMhWgCehzmueTwpMpsmSohcwhXE9FZ+l80A9NQmyjv7xUg7kjUWJ23+09pes/LYbVoqwnwXVRu1YwUOp87IHOZ42LEnZomm2Qm3KLbIUVR58152qZEkVNpnnHAHQsg5ZqW/Dum1zEbVxui+66gXSW1bN1pMqgsuUpkFtFd8/3SZV0/vrVMxC7Kb5bRZg4VwkQ3+Gmil7p7tQkevis92DtIWWgPBMyEq3VS+odUHxbGsYxIo/7AGD26shq1IqktLE7Tpe9iW8sO7/TDORYgtaevN+GISrATUw0i7qgUV/BW0f0wsL8/rQEmvaRpCyrCicU15zxsWGqFu9eYdx+3oPtOmmX89cId1plBGKqYkz0pFVaEFp3S8hmVbaDWk/hfCG465WlPulo/8jfHA2hdQaxBxKMYWoH5GFJWSBqepRo8DzWxFZVs5MvsXMWDwYbolC46iy82XyS0lKvQpBNWXfDaZwwBJSO1rZ6isSCsGvgsf6ImNRsRAtsekYl6UBLu+B6s9d3yelxYJUm5r0J7MLMSKrcHN2csFDSKJ1cnFPJfmy1ehYVvP+IHLT/FkLNlU4Pbm/uDo/2i1dW/o96oE1crZQVOwMB1RX0NIe83zHmmb7urb4dg2eioD2RxIanA1hlaRUwLbXcEr/f05hYrmYLPH+rF0UufbVjbCKjcbZDf7tvNX4C6zp/jgaI2l3CuDq7LJhWcXTq8Od+mJ6vCHmqtFQWlGV0+0PaLpWql/JTqQN03JnVEL+JlVIqEnvU2ODKjtD2rmC1XGJ6D7537+2hZ2QZbU4EInjToGCEtyQ6/B/oQb+GZOVp9pfTly+57FUcXv+R0a7vgdb6VEQJuvwqAyvchYI6uFUUwFrCaPwhESE9sFB6ZtkUfV0jqVzBAt7hOwfCO7qUyYefhLXd0UEodgNo+BevDpKBXgiy6q94xq9VcFnqxktB1b17miniWVMVty0J8s6OoKn2Wta0KhSVXJ8l1v2ikL0YnvZewEEuSG0ah9ylDoc7pzk/PCZRyhhYpfnlrW1Glr4nQsO7Wmy2KLA5vWlgEG9F2Zea9cF+S2yakzW4eHRIfUjvAVtkJuMlRe49bmgudtnmMrj7xqWaZEpDZsMnqA7yBRJslNvBzptSjt7ylenKZ0lRL7SPD49+ZIsqiazh9LYiDi/Lkf7/y9Pd1uySG2FjgwLZB016K5Nuy+cTVmKa1gI1V1ImdLc9kv7kuBTcTmHNhpSoXlV9x+84ZJ0a/+fJiFov2uLOGaJ1uX9ydn76xeWhch0RdNHzStSEhf3Jwb3J3tJVrNGodqhdp9PqV/AE1m2HiFHnFHbS27V+lJ80T5DrKPEp81d2c9kVsHqn5ck8a28OO0cCCbLyl2eHTeoEX32gqwct1q5OW1ZJ63kuI3yjoV8euP4hqxmQ9Ce1eEiMOWqX8i/kN9Af4EJpZV42ZaWPM894vqEbVOxvsdZEu2C8hB9pGLJ+eGDIUtcn1tm3OgrZFmHd2WrwK1Y64xHtLhlvfOkJ9lYGJHVYLKaR4J2TuiPVFkAQ6MBFJOSFH6o/im/FrmgMiQNSva7tun8LLlrETxDsIGsaPGrXV3XmKx700zNHVy9JIvHlI/PuQ90e7udLu4UMVuRdCCyiK1mnqf7aGsvb4Puz8eeTZkPVkT1NbKQ/ECn+7SpQgln+DShNodf7/cQwIisnM3/nGjd0bRMTly1zfzRzd3XyAJT5y3us7bv4grXPjAW7ZarbpPVbleoaMUNP98Q1h89/uJTgZ7mj9jxzBZEZbgqKY+2Hs60N5g/I8xTtKuP1rwYJAO4ORqF587zh1vuQzc+nLW4UX/D3nZo3DBX7rQ6ZjpXXNyaEUvR3gO2jGkVX7IF4+LRbvdhFUaNCWp++f1xFLJSgYuEvZ5Tdevzwg/N3gviOKpUxGTliIjzK7Ks9rvjQr7QOmmck02J64tq/igfkZWHvLqP1j6ki5eH+VyheXm+D80OZiuOWwlb7Xa7BQ3hICte6vH8OdzspggXs97jYLxe8z4n2u+0Ho4H01nAEd3n82qC/gwBjMkqWeyGMXD3RRZTJ52Lk8uaYLKswuXVyUVBHF7xS6AbOo14LL7yvnN/0bm42Y+Cc7y9MMUWm1arLYT34NYXiNjOJzqaJym7u0FA2yyAB/wf0gYLsiZ2PeSE/aeBRw1IIkuxqEr9c1EVS+Qah1URl6osUanlUlsTU50LSxQbh5W92W2dCIgv2GojS3zw/QWfFKJ093E2CXmXBVuYH+/fSe91CsL+aDrEGmDT+E1g9u58HV+U9L5R4NuL4l+CrYN6apEnImpxc9ld0SQ3zbvj2/WnXhBvB4uZwseAGevPeoOuo2w6gkXzrNLHb5D1Z0U+PpygGBlXxJbZb7hpRvPnaej67vK3aW8+Gy2B0Wj29HeaHembjlg0SEkbhoPHV0jW5igHc2KW8USQJcSICvJbgh2rHpbERzoaBCBqbOcznYcx3q4MTkHW+FWSld7tG7HVbLboll0/2NoooCSSRJ93mXM6XZLKGdH5UAMkOekXzql1+ErJSmXVtYitVl6o3xCmp1uWVbKdJWJVOKWmBXUueNN0OBUyzZWCnHVf8ZEh21EeZLWrQnRp+mWrIlPSAlqdj6Dhk4/WXAiFrpdb3UNqdIzEqyUrxZYxrTZUqaaBDo9jezTdprEuOktTTsD3wwnMLJjSQEPSEKOvBnjF9FWTlSSKxrSauO+eS5t3tNzuDSJMQVQt1mLAJ/c8pk1P4rXshSEdk7jrm/puSLPVaMAPLR70JqVFbKUJMWcm8jF2FNu3QruNuDY2JftXT5ZxRCYLQYtmrcJHmtlOh2/4Zy8+xm4yFjodrUrUbV26WDDB72v1wmR3Ch/2x2Q1abYoIIeilS9FFp1j92gSxdU6NcTMVick9WndZ0fp12tYyWFQLOQpwrfyEAdUK35ef9EEs/V4FZ3xMFuLLRcFVwPapDEAo6/XsDZkHRiymu0jhB+aLXJXXbMa0kxgCSpqvKB80A1ou3n41KUN5nwUDV5lCzp7sz4Tduk1k7UdtIgs6FJJE/91KhArPqNASt2drrhcE87HC1PiGo1NAokcWg9Hge+7Cw9RX+/6hr4v4mN7SDxQDbBJGy0HIXf/Zo+/dLvDQW9B5CHBWYwlnVdqdo73R9Nxt9sd95Z8nPDPXTpzctd3852RmFYk4lvURJTjPpWx6gGV+bgcgxVyMdA2PFJ4PbMFA8sAgQNZMKJG66s/pTQ5SNL4YbPdLtMRdutZEBf5WC70F2PH1tKUBb2Pk9CMTJoDVoL+o1ZIf/RedGS+I5JjlY3SonppgTdiDp/65kB4mNdy2qXzQpSKJ5r1p6dJiMtUbw5XU4/mb0Rp1/fy3ZEcJclkcQuxWY5kaPe3ae/X6W9DJ9KlIt9oVhKV6n167P3a++mTFwmI13/4bUqXsh8atgwjtBeTyjKSTkEkNmpHR3jFgVHtdJWVa2Rur9wDGfktP6TyMqMc5TF0slGJt6fmKw3G4eFh1aKzXkt8BG40uLv7wYQfgvzWehixdXjUKFrGu/hYyVy50jCzEQaVci6+9lasirGdTJtjUJiQWqXIjyHKFzbnZZgJuAZ94qt71bP6AUgdJ5myHWKjYh5WVORJcH4eTyVirMLXzFOd3tQDsJK2GJeXE6qIK6KjnGwyiJ5fVKlUYhrNw9d2fQM/EvntrliECj0Di6lKdtwVkweJJc8Se2uGlVoPD2K2Ei8zbhY/zK+4heQpdbt+/z8Um81PB5GTsZcVN484TD0nMnqan3lkn7m26/f/Y5GclmhOPuKH0CVmxc9djflKPeLw7T4LMrW7NY5HMRvRKxL7+vIxo7t+9ztAan+rcbMvDSe/wVt+IisjFcbTVOW/eEn2EHNGysuSZ7F+5SUZVwYpun6Xi/zvfP2mwCPDJiBlVvP/RUZUhh3irZVlMmTIkCFDhgwZMmTIkCFDhgwZMmTIkCFDhgwZMmTI8GfG/wHrsZ/+CCKsIAAAAABJRU5ErkJggg==',
                    }}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    itemText:{
        textAlign: 'start',
        margin: 10,
        color: '#b8b4b4',
    },
    container: {
        paddingTop: 50,
        textAlign: 'center',

    },
    logo: {
        width: 200,
        height: 200,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    description: {
        textAlign: 'start',
        padding: 10,
    },
    title: {
        color: '#f6c32c',
        textTransform: 'uppercase'
    },
    safeArea: {
        backgroundColor: '#4a307a',
        flex: 1,
    }
});


export default OcupationalFielScreen;