import {useEffect, useState} from 'react';
import {getAbilitiesPokemon} from '../detail.action';
import {
  AbilitiesPokemonEntity,
  EffectEntryPokemonAbilityEntity,
} from '../../../data/entity';

export const useAbilitiesPokemon = () => {
  const [listAbilityId, setListAbilityId] = useState<number[]>([]);
  const [abilityLoading, setAbilityLoading] = useState<boolean>(true);
  const [listAbilities, setListAbilities] = useState<AbilitiesPokemonEntity[]>(
    [],
  );

  const setAbilitiesToText = (ability: EffectEntryPokemonAbilityEntity[]) => {
    if (ability.length === 0) {
      return '';
    }
    const res = ability.map(val => {
      return `${val.effect} \n\n ${val.short_effect}`;
    });
    return res;
  };

  useEffect(() => {
    const handleGetListAbility = async () => {
      if (listAbilityId.length === 0) {
        return;
      }

      const result = await getAbilitiesPokemon({listAbilityId});

      if (!result.data) {
        return;
      }

      const filteredListAbilities: AbilitiesPokemonEntity[] = result.data.map(
        val => {
          const res = val.effect_entries.filter(
            (lang: any) => lang.language.name === 'en',
          );

          return {
            name: val.name,
            effect_entries: res,
          };
        },
      );

      setAbilityLoading(false);
      setListAbilities(filteredListAbilities);
    };

    handleGetListAbility();
  }, [listAbilityId]);

  return {
    setListAbilityId,
    abilityLoading,
    listAbilities,
    setAbilitiesToText,
  };
};
